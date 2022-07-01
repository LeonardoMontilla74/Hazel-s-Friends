import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPages } from '../../Redux/actions';
import DogCard from './DogCard';
import durmiendo from '../../Styles/Images/durmiendo.png';
import styles from '../../Styles/Pages.module.css';

export default function Paginate ( { dogs } ) {

    const dispatch = useDispatch();
    const pages = useSelector( ( state ) => state.pages );

    const lastDog = pages * 12;
    const firstDog = lastDog - 12;
    const render = dogs.slice( firstDog, lastDog );
    const totalDogs = dogs.length;
    const pageNumbers = [];

    for ( let i = 1; i <= Math.ceil( totalDogs / 12 ); i++ ) {
        pageNumbers.push( i );
    }

    return (
        <div>
            <nav className={ styles.dogCards }>
                { pageNumbers?.map( ( num ) => (
                    <button key={ num } onClick={ () => dispatch( setPages( num ) ) } >
                        { num }
                    </button>
                ) ) }
            </nav>
            <div className={ styles.container }>
                { render.length
                    ? render?.map( ( dog ) => (
                        <div key={ dog.id } >
                            <DogCard
                                id={ dog.id }
                                name={ dog.name }
                                image={ dog.image }
                                temperaments={ dog.temperaments }
                            />
                        </div>
                    ) )
                    : <div>
                        <h2>Cargando...</h2>
                        <img src={ durmiendo } width={ 180 } alt="Esperando..." />
                    </div>
                }
            </div>
        </div>
    );
}
