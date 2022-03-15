import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DogCard from './DogCard';

export default function Pages({ allDogs }) {

    const [page, setPage] = useState(1);

    const order = useSelector((state) => state.order);
    const filters = useSelector((state) => state.filters);
    const dogDetails = useSelector((state) => state.dogDetails);

    let totalDogs = allDogs.length;
    let render = [];

    const lastDog = page * 8;
    const firstDog = lastDog - 8;

    render = allDogs.slice(firstDog, lastDog);

    if (dogDetails.length) {
        totalDogs = dogDetails.length;
        render = dogDetails;
    }
    if (filters.length) {
        totalDogs = filters.length;
        render = filters.slice(firstDog, lastDog);
    }
    if (order[0].name !== allDogs[0].name) {
        totalDogs = order.length;
        render = order.slice(firstDog, lastDog);
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalDogs / 8); i++) {
        pageNumbers.push(i);
    }

    function handlePage(num) {
        setPage(num);
    }

    return (
        <div>
            <nav>
                {pageNumbers?.map((num) => (
                    <button key={num} onClick={() => handlePage(num)} >
                        {num}
                    </button>
                ))}
            </nav>
            <div>
                {render.length
                    ? render?.map((dog) => (
                        <DogCard
                            key={dog.id}
                            name={dog.name}
                            image={dog.image}
                            temperaments={dog.temperaments}
                        />
                    ))
                    : <h2>Cargando...</h2>
                }
            </div>
        </div>
    );
}