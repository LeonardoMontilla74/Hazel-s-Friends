import React from "react";
import dogPI from '../Styles/Images/dog.png';
import { Link } from "react-router-dom";
import styles from '../Styles/Landing.module.css'

export default function Landing() {
    return (
        <div className={styles.container}>
            <img src={dogPI} alt="" />
            <h1>Hazel's Friends</h1>
            <Link to={'/dogs'} >
                <button>Ver perritos</button>
            </Link>
        </div>
    );
}