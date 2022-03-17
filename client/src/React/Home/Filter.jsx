import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemp, applyFilters, filtersDB, filtersAPI, clearFilters } from '../../Redux/actions';

export default function Order() {

    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);
    const check = temperaments.length
    useEffect(() => {
        if (check < 1) dispatch(getTemp());
    }, [dispatch, check]);


    const handleOrder = (e) => {
        switch (e.target.value) {
            case "DB":
                dispatch(filtersDB());
                break;

            case "API":
                dispatch(filtersAPI());
                break;

            default:
                dispatch(applyFilters(e.target.value));
                break;
        }
    };

    function handleFilters() {
        dispatch(clearFilters());
    }

    return (
        <div>
            <label>Filtrar desde:</label>
            <select onChange={handleOrder}>
                <option>Seleccione una opción</option>
                <option value="ALL">Todos los perros</option>
                <option value="DB">Tus perros creados</option>
                <option value="API">Razas existentes</option>
            </select>
            <label>Filtrar por temperamentos:</label>
            <select onChange={handleOrder}>
                <option value="TEMP">Selecione un temperamento</option>
                {temperaments.map((temp) => <option key={temp.id} value={temp.name} >{temp.name}</option>)}
            </select>
            <button onClick={handleFilters} >Limpiar filtros</button>
        </div>
    );
}