import axios from 'axios';

export const GET_ALL_DOGS = 'GET ALL DOGS';
export const GET_NAME = 'GET NAME';
export const GET_ID = 'GET ID';
export const GET_TEMPERAMENTS = 'GET TEMPERAMENTS';
export const CREATE_DOG = 'CREATE DOG';
export const CLEAR_DETAILS = 'CLEAR DETAILS'

export const ZA = 'ZA';
export const AZ = 'AZ';
export const PESO_DSC = 'PESO_DSC';
export const PESO_ASC = 'PESO_ASC';
export const ALTURA_DSC = 'ALTURA_DSC';
export const ALTURA_ASC = 'ALTURA_ASC'
export const TEMP = 'TEMP';
export const FILTERS_DB = 'FILTERS DB';
export const FILTERS_API = 'FILTERS API'


const URL = 'http://localhost:3001';

export function getAllDogs() {
    return async function (dispatch) {
        const res = await axios.get(`${URL}/dogs`);
        const dogs = res.data;
        dispatch({
            type: GET_ALL_DOGS,
            payload: dogs
        });
    };
}

export function getName(name) {
    return async function (dispatch) {
        const res = await axios.get(`${URL}/dogs?name=${name}`);
        const dog = res.data;
        dispatch({
            type: GET_NAME,
            payload: dog
        });
    };
}

export function getId(idRaza) {
    return async function (dispatch) {
        const res = await axios.get(`${URL}/dogs/${idRaza}`);
        const dog = res.data;
        dispatch({
            type: GET_ID,
            payload: dog
        });
    };
}

export function getTemp() {
    return async function (dispatch) {
        const res = await axios.get(`${URL}/temperaments`);
        const temperaments = res.data;
        dispatch({
            type: GET_TEMPERAMENTS,
            payload: temperaments
        });
    };
}

export function createDog(dogUser) {
    return async function (dispatch) {
        const result = await axios.post(`${URL}/dog`, dogUser);
        dispatch({
            type: CREATE_DOG,
            payload: result
        });
    };
}

export function clearDetails() {
    return ({
        type: CLEAR_DETAILS
    });
}

export function applyOrder(order) {
    switch (order) {
        case 'ZA':
            return ({
                type: ZA
            });

        case 'AZ':
            return ({
                type: AZ
            });

        case 'PESO_DSC':
            return ({
                type: PESO_DSC
            });

        case 'PESO_ASC':
            return ({
                type: PESO_ASC
            });

        case 'ALTURA_DSC':
            return ({
                type: ALTURA_DSC
            });

        case 'ALTURA_ASC':
            return ({
                type: ALTURA_ASC
            });

        default:
            return;
    }
}

export function applyFilters(temp) {
    return ({
        type: TEMP,
        payload: temp
    });
}

export function filtersDB() {
    return {
        type: FILTERS_DB
    };
}

export function filtersAPI() {
    return {
        type: FILTERS_API
    };
}