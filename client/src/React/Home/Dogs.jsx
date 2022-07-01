import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs } from '../../Redux/actions';
import Paginate from './Paginate';

export default function Dogs () {

    const dispatch = useDispatch();
    const allDogs = useSelector( ( state ) => state.allDogs );
    const filters = useSelector( ( state ) => state.render );
    const check = allDogs.length;

    useEffect( () => {
        if ( check < 1 ) dispatch( getAllDogs() );

    }, [dispatch, check] );


    return (
        <div>
            { filters.length
                ? <Paginate dogs={ filters } />
                : <Paginate dogs={ allDogs } />
            }
        </div>
    );
}
