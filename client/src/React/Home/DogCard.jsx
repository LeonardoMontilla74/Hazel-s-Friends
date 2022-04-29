import React from 'react';
import { Link } from 'react-router-dom';
import collage from '../../Styles/Images/collage.jpg';
import crazy from '../../Styles/Images/crazy.png';
import styles from '../../Styles/DogCard.module.css';

export default function DogCard(props) {
    let image = props.image || collage
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
                    <img src={crazy} alt="Img del perro" width={180} />
                    <p>{props.temperaments}</p>
                </div>
            }
        </div>
    );
}