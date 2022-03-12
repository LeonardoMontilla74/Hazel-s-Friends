import {
    GET_ALL_DOGS,
    GET_NAME,
    GET_ID,
    GET_TEMPERAMENTS,
    CREATE_DOG,
    CLEAR_DETAILS,
    ZA,
    AZ,
    PESO_DSC,
    PESO_ASC,
    ALTURA_DSC,
    ALTURA_ASC
} from "./actions";

import order from './controlers'

const initialState = {
    allDogs: [],
    order: [],
    filters: [],
    dogDetails: [],
    temperaments: []
};


export default function Reducer(state = initialState, { type, payload }) {

    switch (type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: payload,
                order: payload.map((dog) => {
                    return {
                        ...dog,
                        weight: Number(dog.weight.slice(0, 2)),
                        height: Number(dog.height.slice(0, 2))
                    };
                })
            };

        case GET_NAME:
            return {
                ...state,
                dogDetails: payload
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
                allDogs: [payload, ...state.allDogs]
            };

        case CLEAR_DETAILS:
            return {
                ...state,
                dogDetails: []
            }

        case ZA:
            return {
                ...state,
                order: order('ZA', state.order)
            };

        case AZ:
            return {
                ...state,
                order: order('AZ', state.order)
            };

        case PESO_DSC:
            return {
                ...state,
                order: order('PESO_DSC', state.order)
            };

        case PESO_ASC:
            return {
                ...state,
                order: order('PESO_ASC', state.order)
            };

        case ALTURA_DSC:
            return {
                ...state,
                order: order('ALTURA_DSC', state.order)
            };

        case ALTURA_ASC:
            return {
                ...state,
                order: order('ALTURA_ASC', state.order)
            };

        default: return state;
    }
}