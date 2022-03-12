import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getName } from '../../Redux/actions';

export default function SearchBar() {

    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const findByName = (e) => {
        e.preventDefault();
        dispatch(getName(input));
        setInput('');
    };
    return (
        <form>
            <input
                type="text"
                placeholder="Buscar perro..."
                value={input}
                onChange={handleInput}
            />
            <button
                onClick={findByName}>
                Buscar
            </button>
        </form>
    );
}