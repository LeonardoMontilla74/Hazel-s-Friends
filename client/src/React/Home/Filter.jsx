import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemp, applyFilters, all } from '../../Redux/actions';

export default function Order() {

    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);
    const check = temperaments.length
    useEffect(() => {
        if (check < 1) dispatch(getTemp());
    }, [dispatch, check]);

    function handleFilters(e) {
        dispatch(applyFilters(e.target.value))
    }

    return (
        <div>
            <label>Filtrar desde:</label>
            <select onChange={handleFilters}>
                <option>Seleccione una opción</option>
                <option value="DB">Tus perros creados</option>
                <option value="API">Razas existentes</option>
            </select>
            <label>Filtrar por temperamentos:</label>
            <select onChange={handleFilters}>
                <option value={null}>Selecione un temperamento</option>
                {temperaments.map((temp) => <option key={temp.id} value={temp.name} >{temp.name}</option>)}
            </select>
            <button onClick={() => dispatch(all())} >Limpiar filtros</button>
        </div>
    );
}