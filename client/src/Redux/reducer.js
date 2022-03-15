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
    ALTURA_ASC,
    TEMP,
    FILTERS_DB,
    FILTERS_API,
    CLEAR_FILTERS
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
                dogDetails: payload,
            };

        case GET_ID:
            return {
                ...state,
                dogDetails: payload,
            };

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: payload
            };

        case CREATE_DOG:
            return {
                ...state,
                allDogs: state.allDogs,
            };

        case CLEAR_DETAILS:
            return {
                ...state,
                dogDetails: [],
            }

        case ZA:
            return {
                ...state,
                order: order('ZA', state.order),
            };

        case AZ:
            return {
                ...state,
                order: order('AZ', state.order),
            };

        case PESO_DSC:
            return {
                ...state,
                order: order('PESO_DSC', state.order),
            };

        case PESO_ASC:
            return {
                ...state,
                order: order('PESO_ASC', state.order),
            };

        case ALTURA_DSC:
            return {
                ...state,
                order: order('ALTURA_DSC', state.order),
            };

        case ALTURA_ASC:
            return {
                ...state,
                order: order('ALTURA_ASC', state.order),
            };

        case TEMP:
            let filterDog = [];
            if (state.filters.length < 1) {
                filterDog = state.allDogs;
            } else {
                filterDog = state.filters.filter((dog) => {
                    if (dog.id !== 196
                        && dog.id !== 197
                        && dog.id !== 211
                        && dog.id !== 261) return dog;
                });
            }
            return {
                ...state,
                filters: filterDog.filter((dog) => {
                    if (dog.temperaments) {
                        return dog.temperaments.includes(payload);
                    }
                    return dog
                })
            };

        case FILTERS_DB:
            return {
                ...state,
                filters: state.allDogs.filter((dog) => dog.id.length > 4)
            };

        case FILTERS_API:
            return {
                ...state,
                filters: state.allDogs.filter((dog) => dog.id.length === undefined)
            };

        case CLEAR_FILTERS:
            return {
                ...state,
                filters: [],
            }

        default: return state;
    }
}