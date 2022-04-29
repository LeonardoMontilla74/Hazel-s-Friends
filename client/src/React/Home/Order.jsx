import React from "react";
import { useDispatch } from "react-redux";
import { applyOrder } from "../../Redux/actions";

export default function Order() {

    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(applyOrder(e.target.value));
    };

    return (
        <div>
            <label>Ordenar:</label>
            <select onChange={handleOrder}>
                <option>Seleccione una opción</option>
                <option value="ZA">Z - A</option>
                <option value="AZ">A - Z</option>
                <option value="PESO_DSC">Mayor peso</option>
                <option value="PESO_ASC">Menor peso</option>
                <option value="ALTURA_DSC">Mayor altura</option>
                <option value="ALTURA_ASC">Menor altura</option>
            </select>
            <button value='ALL' onClick={handleOrder} >Limpiar orden</button>
        </div>
    );
}