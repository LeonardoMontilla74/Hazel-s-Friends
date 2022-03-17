import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemp, createDog, getAllDogs } from "../Redux/actions";
import { useHistory } from 'react-router-dom'
import styles from '../Styles/Create.module.css'

export default function Create() {

    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);
    const check = temperaments.length
    const history = useHistory()

    useEffect(() => {
        if (check < 1) dispatch(getTemp());
    }, [dispatch, check]);

    const [inputs, setInputs] = useState({
        temperaments: [],
    });

    const [errors, setErrors] = useState({
        name: '',
        height_max: '',
        weight_max: '',
        origin: '',
        bred_for: ''
    });

    function validate(inputs) {

        let error = {};
        if (/\d+/.test(inputs.name)) error.name = "El nombre es inválido";
        if (/\d+/.test(inputs.bred_for)) error.bred_for = "Debe ser un texto";
        if (/\d+/.test(inputs.origin)) error.origin = "Debe ser un texto";
        if (inputs.height_max < inputs.height_min) error.height_max = 'La altura máxima debe ser mayor';
        if (inputs.weight_max < inputs.weight_min) error.weight_max = 'El peso máximo debe ser mayor';

        setErrors(error);
    }

    const handleChange = (e) => {
        if (e.target.name === 'temperaments') {
            setInputs({
                ...inputs,
                temperaments: [...inputs.temperaments, Number(e.target.value)],
            });
        } else if (e.target.type === 'number') {
            setInputs({
                ...inputs,
                [e.target.name]: Number(e.target.value)
            });
        }
        else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        }
        validate(inputs)
    };

    const onSubmit = (input) => {
        dispatch(createDog(input));
        dispatch(getAllDogs());
        alert("Creación exitosa");
        history.push('/dogs');
    };

    return (
        <div>
            <form>
                <label>Nombre:
                    <input
                        type="text"
                        placeholder="Ej. Hazel..."
                        name="name"
                        value={inputs.name}
                        autoComplete="off"
                        className={errors.name ? styles.error : styles.ok}
                        onChange={handleChange} />
                    {errors.name ? <p className={styles.error}>{errors.name}</p> : null}
                </label>
                <br />

                <label>Altura máxima:
                    <input
                        type="number"
                        placeholder="Ej. 80... Debe ser mayor"
                        name="height_max"
                        value={inputs.height_max}
                        className={errors.height_max ? styles.error : styles.ok}
                        onChange={handleChange} />
                    {errors.height_max ? <p className={styles.error} >{errors.height_max}</p> : null}
                </label>

                <label>Altura minima:
                    <input
                        type="number"
                        placeholder="Ej. 60..."
                        name="height_min"
                        value={inputs.height_min}
                        onChange={handleChange} />
                </label>
                <br />

                <label>Peso máximo
                    <input
                        type="number"
                        placeholder="Ej. 8... Debe ser mayor"
                        name="weight_max"
                        value={inputs.weight_max}
                        className={errors.weight_max ? styles.error : styles.ok}
                        onChange={handleChange} />
                    {errors.weight_max ? <p className={styles.error}>{errors.weight_max}</p> : null}
                </label>

                <label>Peso minimo:
                    <input
                        type="number"
                        placeholder="Ej. 4..."
                        name="weight_min"
                        value={inputs.weight_min}
                        onChange={handleChange} />
                </label>
                <br />

                <label>Edad:
                    <input
                        type="number"
                        placeholder="Ej. 3.."
                        name="life"
                        value={inputs.life}
                        onChange={handleChange} />
                </label>
                <br />

                <label>Origen:
                    <input
                        type="text"
                        placeholder="Ej. Venezuela..."
                        name="origin"
                        value={inputs.origin}
                        autoComplete='off'
                        className={errors.origin ? styles.error : styles.ok}
                        onChange={handleChange} />
                </label>
                <br />

                <label>Ideal para:
                    <input
                        type="text"
                        placeholder="Ej. Correr..."
                        name="bred_for"
                        value={inputs.bred_for}
                        autoComplete='off'
                        className={errors.bred_for ? styles.error : styles.ok}
                        onChange={handleChange} />
                </label>
                <br />

                <label>Temperamentos:
                    <select name="temperaments" onChange={handleChange} >
                        <option value="">Seleciona un temperamento</option>
                        {temperaments.map((temp) => {
                            return (
                                <option key={temp.id} name={temp.id} value={temp.id} >{temp.name}</option>
                            );
                        })}
                    </select>
                    <p>Elgiste los temperamentos # {inputs.temperaments?.join(' - ')}</p>
                </label>
                <br />

            </form>

            <button
                className={styles.buttonGet}
                onClick={() => onSubmit(inputs)}>Crear perrito</button>

        </div>
    );
}