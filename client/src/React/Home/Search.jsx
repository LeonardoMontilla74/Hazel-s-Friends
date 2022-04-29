import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getName, clear } from '../../Redux/actions';

export default function SearchBar() {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');


    function handleInput(e) {
        setInput(e.target.value);
    };

    function findByName(e) {
        e.preventDefault();
        if (e.keyCode === 13) dispatch(getName(input))
        dispatch(getName(input));
        setInput('');
    };

    function getBack(e) {
        e.preventDefault()
        dispatch(clear());
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