import React from "react";

import Order from "./Order";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'
import Pages from "./Pages";

export default function Home() {

    return (
        <div>
            <SearchBar />
            <Order />
            <Filter />
            <Link to='/createDog'>
                <button>Crear un nuevo perrito</button>
            </Link>
            <Pages />
        </div>
    );
}