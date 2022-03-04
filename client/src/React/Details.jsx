import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getId } from "../Redux/actions";

export default function Details(props) {

    const dispatch = useDispatch();
    const dog = useSelector((state) => state.dog);

    useEffect(() => {
        dispatch(getId(props.match.params.idRaza));
    }, [dispatch]);


    return (
        <div>
            {dog.length
                ? dog.map((dog) => {
                    return (
                        <div key={dog.id}>
                            <h2>{dog.name}</h2>
                            <img src={dog.image} alt={dog.name} width={350} />
                            <p>Temperamento: {dog.temperament}</p>
                            <p>Altura: {dog.height}</p>
                            <p>Peso: {dog.weight}</p>
                            <p>Espectativa de vida: {dog.life}</p>
                            <p>País de origen: {dog.origin}</p>
                            <p>Ideal para: {dog.bred_for}</p>
                        </div>
                    );
                })
                : <h2>Cargando...</h2>}
        </div>
    );
}