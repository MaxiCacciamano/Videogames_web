import React from 'react';
import { filterByOrigen } from '../../redux/Actions/index';
import { useDispatch } from 'react-redux' 

const FilterByOrigen = () => {
    const dispatch = useDispatch();

    function handleSelectOrigen (e) {
        e.preventDefault();
        dispatch(filterByOrigen(e.target.value))
    }
    return (
        <div>
            {/* <span>Filter By Origen :</span> */}
            <select onChange={e=>handleSelectOrigen(e)}>
                <option value = "All">-- All --</option>
                <option value = "Existing">Existing</option>
                <option value = "Created">Created</option>
            </select>
        </div>
    );
}
 
export default FilterByOrigen;