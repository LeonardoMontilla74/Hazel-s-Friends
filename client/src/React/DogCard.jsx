import React from 'react';

export default function DogCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt="Img del perro" width={120} />
            <p>{props.temperaments}</p>
        </div>
    );
}