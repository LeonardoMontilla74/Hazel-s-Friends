import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getId, clearDetails } from "../Redux/actions";
import { useHistory } from 'react-router-dom'
import durmiendo from '../Styles/Images/durmiendo.png';
import styles from '../Styles/DogCard.module.css'

export default function Details(props) {

    const dispatch = useDispatch();
    const dog = useSelector((state) => state.dogDetails);
    const id = props.match.params.idRaza
    const history = useHistory()

    useEffect(() => {

        dispatch(getId(id));

        return () => dispatch(clearDetails());

    }, [dispatch, id]);

    function getBack() {
        history.push('/dogs');
    }

    return (
        <div>
            <button onClick={getBack} >Volver</button>
            <div className={styles.container}>
                {dog.length
                    ? dog.map((dog) => {
                        return (
                            <div key={dog.id}>
                                <div className={styles.cardsDetails}>
                                    <h2>{dog.name}</h2>
                                    <img src={dog.image} alt={dog.name} width={350} />
                                    <p>Temperamento: {dog.temperaments}</p>
                                    <p>Altura: {dog.height} cm</p>
                                    <p>Peso: {dog.weight} kg</p>
                                    <p>Espectativa de vida: {dog.life}</p>
                                    <p>País de origen: {dog.origin}</p>
                                    <p>Ideal para: {dog.bred_for}</p>
                                </div>
                            </div>
                        );
                    })
                    : <div>
                        <h2>Cargando...</h2>
                        <img src={durmiendo} width={180} alt="Esperando..." />
                    </div>
                }
            </div>
        </div>
    );
}