import axios from 'axios';
import crazy from '../Styles/Images/crazy.png';

export const GET_ALL_DOGS = 'GET ALL DOGS';
export const GET_NAME = 'GET NAME';
export const GET_ID = 'GET ID';
export const GET_TEMPERAMENTS = 'GET TEMPERAMENTS';
export const CREATE_DOG = 'CREATE DOG';
export const ORDER = 'ORDER';
export const FILTER = 'FILTER';
export const ALL = 'ALL';
export const CLEAR = 'CLEAR';

const URL = 'http://localhost:3001';

export function getAllDogs() {
    return async function (dispatch) {
        const res = await axios.get(`${URL}/dogs`);
        const allDogs = res.data;
        dispatch({
            type: GET_ALL_DOGS,
            payload: allDogs
        });
    };
}

export function getName(name) {
    return async function (dispatch) {
        const res = await axios.get(`${URL}/dogs?name=${name}`);
        let dog = res.data; // Si consigue el perro lo envía
        // Si la respuesta del back es 404, recibo nombre y temperaments pero con esta línea le envío una imagen 
        if (dog[0].id === 404) dog = [{ ...dog, image: crazy }];
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
        const result = await axios.post(`${URL}/dog`, dogUser); // Recibo al perro creado como un objeto
        dispatch({
            type: CREATE_DOG,
            payload: result // recibo [{perro creado...}]
        });
    };
}

export function applyOrder(order) {
    return ({
        type: ORDER,
        payload: order
    });
}

export function applyFilters(filter) {
    return ({
        type: FILTER,
        payload: filter,
    });
}

export function all() {
    return ({
        type: ALL
    });
}

export function clear() { // Para que cada vez que se vea un nuevo perro el estado esté vacío el detalle
    return ({
        type: CLEAR
    });
}