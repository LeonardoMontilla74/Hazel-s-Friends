import {
    GET_ALL_DOGS,
    GET_NAME,
    GET_ID,
    GET_TEMPERAMENTS,
    CREATE_DOG,
    ORDER,
    FILTER,
    ALL,
    CLEAR
} from "./actions";

import { order, filter } from './controlers';

const initialState = {
    allDogs: [],
    render: [],
    dogDetails: [],
    temperaments: []
};

export default function Reducer(state = initialState, { type, payload }) {

    switch (type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: payload,
                render: payload
            };

        case GET_NAME:
            return {
                ...state,
                render: payload
            };

        case GET_ID:
            return {
                ...state,
                dogDetails: payload
            };

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: payload
            };

        case CREATE_DOG:
            return {
                ...state,
                dogDetails: payload
            };

        case ORDER:
            return {
                ...state,
                render: [...order(payload, state.render)] // función que recibe el tipo y el estado y devuelve el mismo array ordenado
            }; //Nota: como recibe el mismo array pero ordenado para renderizar es necesario meterlo en un nuevo array

        case FILTER:
            return {
                ...state,
                render: filter(payload, state.render)
            };

        case ALL:
            return {
                ...state,
                render: state.allDogs // para volver al estado original
            };

        case CLEAR:
            return {
                ...state, // si necesito limpiar el render por ejemplo al entrar en cada detalle
                dogDetails: []
            };

        default: return state;
    }
}