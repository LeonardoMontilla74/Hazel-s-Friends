import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemp, applyFilters, filtersDB, filtersAPI } from '../../Redux/actions';

export default function Order() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemp());

    }, [dispatch]);

    const temperaments = useSelector((state) => state.temperaments);

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

    return (
        <div>
            <label>Filtrar:</label>
            <select name="" id="" onChange={handleOrder}>
                <option>Seleccione una opción</option>
                <option value="DB">Tus perros creados</option>
                <option value="API">Otras razas</option>
                <option value="TEMP">Temperamento</option>
                {temperaments.map((temp) => <option key={temp.id} value={temp.name} >{temp.name}</option>)}
            </select>
        </div>
    );
}