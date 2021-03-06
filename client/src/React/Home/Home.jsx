import React from "react";
import Search from './Search';
import Order from "./Order";
import Filter from "./Filter";
import { Link } from 'react-router-dom'
import Dogs from "./Dogs";
import styles from '../../Styles/Search.module.css'
import dogLaptop from '../../Styles/Images/dog-laptop.jpg'
import NavBar from "./NavBar";

export default function Home() {

    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                <Search />
                <Order />
                <Filter />
                <Link to='/createDog' style={{ textDecoration: 'none' }} >
                    <div className={styles.create}>
                        <img className={ styles.imagenDogLaptop }
                            src={ dogLaptop }
                            alt="img not found" />
                        <button>Crear un nuevo perrito</button>
                    </div>
                </Link>
            </div>
            <Dogs />
        </div>
    );
}
