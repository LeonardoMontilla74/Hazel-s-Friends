import React from "react";
import Search from './Search';
import Order from "./Order";
import Filter from "./Filter";
import { Link } from 'react-router-dom'
import Pages from "./Pages";
import styles from '../../Styles/Search.module.css'

export default function Home() {

    return (
        <div>
            <div className={styles.container}>
                <Search />
                <Order />
                <Filter />
                <Link to='/createDog'>
                    <button>Crear un nuevo perrito</button>
                </Link>
            </div>
            <Pages />
        </div>
    );
}