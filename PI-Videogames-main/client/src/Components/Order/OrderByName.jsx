import React from 'react'
import {useDispatch} from 'react-redux';
import {useState} from 'react'
import { orderByName, getAll, setOrder } from '../../redux/Actions/index';

export const OrderByName = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')

    function handleName (e) {
      e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

  return (
    <>
      {/* <span>Order by name: </span> */}
      <select onChange={e=>handleName(e)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
      </select>
    </>
  )
}
export default OrderByName;
