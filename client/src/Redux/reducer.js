import {
    GET_ALL_DOGS,
    GET_NAME,
    GET_TEMPERAMENTS,
    CREATE_DOG
} from "./actions";

const initialState = {
    allDogs: [],
    dog: [],
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
                dog: payload
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

        default: return state;
    }
}