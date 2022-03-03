import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../Redux/actions';
import DogCard from "./DogCard";

export default function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);

    useEffect(() => {
        dispatch(getAllDogs());

    }, [dispatch]);


    return (
        <div>
            {allDogs.map((dog) => {
                return (
                    <DogCard
                        key={dog.name}
                        name={dog.name}
                        image={dog.image}
                        temperaments={dog.temperaments} />
                );
            })}
        </div>
    );
}