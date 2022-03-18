import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getId, clearDetails } from "../Redux/actions";
import { useHistory } from 'react-router-dom'
import durmiendo from '../Styles/Images/durmiendo.png';
import HazelDefault from '../Styles/Images/HazelDefault.jpg';
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
            <div className={styles.container}>
                {dog.length
                    ? dog.map((dog) => {
                        return (
                            <div key={dog.id}>
                                <div className={styles.cardsDetails}>

                                    <h2>{dog.name}</h2>

                                    <div className={styles.container}>
                                        <div>
                                            <img src={dog.image || HazelDefault} alt='' width={400} height={350} />
                                        </div>

                                        <div>
                                            {dog.temperaments ? <p>Temperamento: {dog.temperaments}</p> : null}
                                            <p>Altura: {dog.height} cm</p>
                                            <p>Peso: {dog.weight} kg</p>
                                            {dog.life ? < p > Espectativa de vida: {dog.life}</p> : null}
                                            {dog.origin ? <p>País de origen: {dog.origin}</p> : null}
                                            {dog.bred_for ? <p>Ideal para: {dog.bred_for}</p> : null}
                                            <button onClick={getBack} >Volver</button>
                                        </div>
                                    </div>

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