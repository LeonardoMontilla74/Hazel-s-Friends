import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemp, createDog } from "../Redux/actions";

export default function Create() {

    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);

    useEffect(() => {

        dispatch(getTemp());

    }, [dispatch]);


    const [input, setInput] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life: '',
        origin: '',
        bred_for: '',
        temperaments: [],
    });

    const handleChange = (e) => {
        if (e.target.name === 'temperaments') {
            setInput({
                ...input,
                temperaments: [...input.temperaments, Number(e.target.value)],
            });
        } else if (e.target.type === 'number') {
            setInput({
                ...input,
                [e.target.name]: Number(e.target.value)
            });
        }
        else {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
        }
    };

    const onSubmit = (input) => {
        dispatch(createDog(input));
        console.log(input);
        setInput({});
    };

    return (
        <div>
            <form>
                <label>Nombre:
                    <input type="text" name="name" value={input.name} onChange={handleChange} />
                </label>
                <label>Altura minima:
                    <input type="number" name="height_min" value={input.height_min} onChange={handleChange} />
                </label>
                <label>Altura máxima:
                    <input type="number" name="height_max" value={input.height_max} onChange={handleChange} />
                </label>
                <label>Peso minimo:
                    <input type="number" name="weight_min" value={input.weight_min} onChange={handleChange} />
                </label>
                <label>Peso máximo
                    <input type="number" name="weight_max" value={input.weight_max} onChange={handleChange} />
                </label>
                <label>Edad:
                    <input type="number" name="life" value={input.life} onChange={handleChange} />
                </label>
                <label>Origen:
                    <input type="text" name="origin" value={input.origin} onChange={handleChange} />
                </label>
                <label>Ideal para:
                    <input type="text" name="bred_for" value={input.bred_for} onChange={handleChange} />
                </label>
                <label>Temperamentos:
                    <select name="temperaments" onChange={handleChange} >
                        <option value="">Seleciona un temperamento</option>
                        {temperaments.map((temp) => {
                            return (
                                <option key={temp.id} name={temp.id} value={temp.id} >{temp.name}</option>
                            );
                        })}
                    </select>
                </label>
                <p>{input.temperaments.join(' - ')}</p>
            </form>
            <button onClick={() => onSubmit(input)}>Crear perrito</button>
        </div>
    );
}