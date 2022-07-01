import React from 'react';
import { Link } from 'react-router-dom';
import button from '../../Styles/Images/button.png';
import github from '../../Styles/Images/github.png';
import linkedin from '../../Styles/Images/linkedin.png';
import styles from '../../Styles/NavBar.module.css';

export default function NavBar () {
    return (
        <div className={ styles.navbarContainer }>
            <div>
                <Link to={ '/' } >
                    <button className={ styles.buttonGet }>
                        <img src={ button } width={ 80 } alt='Volver' />
                    </button>
                </Link>
            </div>

            <div>
                <h1>Hazel's Friends</h1>
            </div>

            <div className={ styles.containerSocial }>
                <a
                    href="https://github.com/LeonardoMontilla74"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={ github } alt="github" width={ 40 } />
                </a>

                <a
                    href="https://www.linkedin.com/in/leonardomontilla74"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={ linkedin } alt="github" width={ 40 } />
                </a>

            </div>
        </div>
    );
}
