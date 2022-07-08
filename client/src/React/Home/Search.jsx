import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getName, setPages, all } from '../../Redux/actions';

export default function SearchBar() {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');


    function handleInput(e) {
        setInput(e.target.value);
    };

    function findByName(e) {
        e.preventDefault();
        if (e.keyCode === 13) dispatch(getName(input))
        dispatch( getName( input ) );
        dispatch( setPages( 1 ) )
        setInput('');
    };

    function getBack(e) {
        e.preventDefault()
        dispatch(all());
    }

    return (
        <div>
            <form>
                <label> Escribe aquí el nombre de una raza para buscar...</label>
                <br />
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={input}
                    onChange={handleInput}
                />
                <br />
                <button onClick={findByName}>Buscar</button>
                <button onClick={getBack} >Volver</button>
            </form>
        </div>
    );
}
