import React from 'react'
import {useDispatch} from 'react-redux';
import { setOrder, getAll } from '../../redux/Actions/index';

export const OrderByName = () => {
    const dispatch = useDispatch();

    const handleName= (e)=>{
        e.preventDefault();
        dispatch(setOrder(e.target.value))
        dispatch(getAll({order:e.target.value}))
    }

  return (
    <>
      <span>Order by name</span>
      <select onChange={handleName}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
      </select>
    </>
  )
}
export default OrderByName;
