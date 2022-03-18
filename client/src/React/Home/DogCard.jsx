import React from 'react';
import { Link } from 'react-router-dom';
import HazelDefault from '../../Styles/Images/HazelDefault.jpg';
import styles from '../../Styles/DogCard.module.css';

export default function DogCard(props) {
    let image = props.image || HazelDefault
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