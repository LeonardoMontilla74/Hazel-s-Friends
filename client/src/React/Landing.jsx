import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../Redux/actions";
import dogPI from '../Styles/Images/dog.png';
import { Link } from "react-router-dom";
import styles from '../Styles/Landing.module.css'

export default function Landing() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs());
    })


    return (
        <div className={styles.container}>
            <img src={dogPI} alt="" />
            <h1>Hazel's Friends</h1>
            <Link to={'/dogs'} >
                <button className={styles.buttonGet}>Ver perritos</button>
            </Link>
        </div>
    );
}