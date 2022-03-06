import React from 'react';
import styles from '../../Styles/DogCard.module.css';

export default function DogCard(props) {
    return (
        <div className={styles.container}>
            <h2>{props.name}</h2>
            <img src={props.image} alt="Img del perro" width={120} />
            <p>{props.temperaments}</p>
        </div>
    );
}