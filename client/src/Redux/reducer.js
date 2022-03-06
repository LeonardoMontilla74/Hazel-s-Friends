import {
    GET_ALL_DOGS,
    GET_NAME,
    GET_ID,
    GET_TEMPERAMENTS,
    CREATE_DOG,
    CLEAR_DETAILS
} from "./actions";

const initialState = {
    allDogs: [],
    dogDetails: [],
    temperaments: []
};

export default function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: payload
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

        default: return state;
    }
}