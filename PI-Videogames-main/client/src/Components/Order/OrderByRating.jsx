import React from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {orderByRating} from '../../redux/Actions/index';

export const OrderByRating = () => {

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState('')



  function handleRating (e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByRating(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }

  return (
    <>
     {/* <span>Order by rating: </span> */}
      <select onChange={e=>handleRating(e)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
      </select>
    </>
  )
}

export default OrderByRating;