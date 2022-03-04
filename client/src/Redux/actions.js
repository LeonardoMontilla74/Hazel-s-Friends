import axios from 'axios';

export const GET_ALL_DOGS = 'GET ALL DOGS';
export const GET_NAME = 'GET NAME';
export const GET_ID = 'GET ID';
export const GET_TEMPERAMENTS = 'GET TEMPERAMENTS';
export const CREATE_DOG = 'CREATE DOG';

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