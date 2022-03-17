import React from "react";
import Search from './Search';
import Order from "./Order";
import Filter from "./Filter";
import { Link } from 'react-router-dom'
import Pages from "./Pages";

export default function Home() {

    return (
        <div>
            <Search />
            <Order />
            <Filter />
            <Link to='/createDog'>
                <button>Crear un nuevo perrito</button>
            </Link>
            <Pages />
        </div>
    );
}