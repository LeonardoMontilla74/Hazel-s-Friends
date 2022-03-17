import React from 'react';
import { Link } from 'react-router-dom';
import doguillo from '../../Styles/Images/doguillo.jpg';
import styles from '../../Styles/DogCard.module.css';

export default function DogCard(props) {
    let image = props.image || doguillo
    return (
        <div className={styles.dogCards}>
            {props.id !== 404
                ? <Link style={{ textDecoration: 'none' }} to={`/details/${props.id}`}>
                    <h2>{props.name}</h2>
                    <img src={image} alt="Img del perro" width={180} />
                    <p>{props.temperaments}</p>
                </Link>
                : <div>
                    <h2>{props.name}</h2>
                    <img src={image} alt="Img del perro" width={180} />
                    <p>{props.temperaments}</p>
                </div>
            }
        </div>
    );
}