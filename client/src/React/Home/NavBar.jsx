import React from 'react';
import { Link } from 'react-router-dom';
import button from '../../Styles/Images/button.png';
import styles from '../../Styles/NavBar.module.css';

export default function NavBar () {
    return (
        <div className={ styles.navbarContainer }>
            <Link to={ '/' } >
                <button className={ styles.buttonGet }>
                    <img src={ button } width={ 80 } alt='Volver' />
                </button>
            </Link>
            <h1>Hazel's Friends</h1>
        </div>
    );
}
