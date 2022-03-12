import {
    GET_ALL_DOGS,
    GET_NAME,
    GET_ID,
    GET_TEMPERAMENTS,
    CREATE_DOG,
    CLEAR_DETAILS,
    ZA,
    AZ
} from "./actions";

const initialState = {
    allDogs: [],
    filters: [],
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

        case ZA:
            return {
                ...state,
                allDogs: state.allDogs.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
            };

        case AZ:
            return {
                ...state,
                allDogs: state.allDogs.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })
            };

        default: return state;
    }
}