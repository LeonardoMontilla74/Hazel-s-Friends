import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getName, clearDetails } from '../../Redux/actions';

export default function SearchBar() {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');


    function handleInput(e) {
        setInput(e.target.value);
    };

    function findByName() {
        dispatch(getName(input));
        setInput('');
    };

    function getBack() {
        dispatch(clearDetails());
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
            </form>
            <button onClick={findByName}>Buscar</button>
            <button onClick={getBack} >Volver</button>
        </div>
    );
}