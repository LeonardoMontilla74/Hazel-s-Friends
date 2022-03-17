import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getName, clearDetails } from '../../Redux/actions';

export default function SearchBar() {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');


    function handleInput(e) {
        setInput(e.target.value);
    };

    function findByName(e) {
        e.preventDefault();
        dispatch(getName(input));
        setInput('');
    };

    function getBack(e) {
        e.preventDefault();
        dispatch(clearDetails());
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Buscar perro..."
                    value={input}
                    onChange={handleInput}
                />
                <button onClick={findByName}>Buscar</button>
                <button onClick={getBack} >Volver</button>
            </form>
        </div>
    );
}