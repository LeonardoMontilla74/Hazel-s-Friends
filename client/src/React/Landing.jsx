import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../Redux/actions";
import dogPI from '../Styles/Images/dog-retrato.jpg';
import button from '../Styles/Images/button.png';
import { Link } from "react-router-dom";
import styles from '../Styles/Landing.module.css'

export default function Landing() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs());
    })

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.imagen} src={dogPI} alt="Img retrato" />
            </div>

            <div className={styles.titulo}>
                <h1>Hazel's Friends</h1>
                <h2>Ver perritos</h2>
                <Link to={'/dogs'} >
                    <button className={styles.buttonGet}><img src={button} width={120} alt='img not found' /></button>
                </Link>
            </div>
        </div>
    );
}