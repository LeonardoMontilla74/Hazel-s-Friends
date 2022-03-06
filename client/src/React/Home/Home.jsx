import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllDogs } from '../../Redux/actions';
import DogCard from "./DogCard";

export default function Home() {

    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const prueba = allDogs.length;
    const page = allDogs.slice(0, 8);

    useEffect(() => {
        if (!prueba) {
            dispatch(getAllDogs());
        }

    }, [dispatch, prueba]);


    return (
        <div>
            {page.map((dog) => {
                return (
                    <Link key={dog.id} to={`/details/${dog.id}`}>
                        <DogCard
                            name={dog.name}
                            image={dog.image}
                            temperaments={dog.temperaments} />
                    </Link>

                );
            })}
        </div>
    );
}