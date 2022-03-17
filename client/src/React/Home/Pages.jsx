import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs, getPage } from '../../Redux/actions';
import DogCard from './DogCard';

export default function Pages() {

    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const order = useSelector((state) => state.order);
    const filters = useSelector((state) => state.filters);
    const dogDetails = useSelector((state) => state.dogDetails);
    const page = useSelector((state) => state.page)
    const check = allDogs.length;

    useEffect(() => {
        dispatch(getPage(1))
        if (check < 1) dispatch(getAllDogs());

    }, [dispatch, check]);

    const lastDog = page * 8;
    const firstDog = lastDog - 8;

    let render = [];
    render = allDogs.slice(firstDog, lastDog);

    let totalDogs = allDogs.length;
    if (dogDetails.length) {
        totalDogs = dogDetails.length;
        render = dogDetails.slice(firstDog, lastDog)
    }
    if (filters.length) {
        totalDogs = filters.length;
        render = filters.slice(firstDog, lastDog);
        dispatch(getPage(1))
    }
    if (order.length) {
        totalDogs = order.length;
        render = order.slice(firstDog, lastDog);
        dispatch(getPage(1))
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalDogs / 8); i++) {
        pageNumbers.push(i);
    }

    function handlePage(num) {
        dispatch(getPage(num));
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
                {render.length > 0
                    ? render?.map((dog) => (
                        <DogCard
                            key={dog.id}
                            id={dog.id}
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