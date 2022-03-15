import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../Redux/actions";
import Order from "./Order";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'
import Pages from "./Pages";

export default function Home() {

    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const check = allDogs.length;

    useEffect(() => {
        if (check < 1) {
            dispatch(getAllDogs());
        }
    }, [dispatch, check]);


    return (
        <div>
            <SearchBar />
            <Order />
            <Filter />
            <Link to='/createDog'>
                <button>Crear un nuevo perrito</button>
            </Link>
            <Pages allDogs={allDogs} />
        </div>
    );
}