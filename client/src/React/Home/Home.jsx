import React from "react";
import Order from "./Order";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div>
            <Order />
            <Filter />
            <SearchBar />
            <Link to='/createDog'>
                <button>Crear un nuevo perrito</button>
            </Link>
        </div>
    );
}