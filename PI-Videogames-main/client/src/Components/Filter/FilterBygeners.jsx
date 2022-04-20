import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {filterByGenres} from '../../redux/Actions';

export const FilterBygeners = () => {

  const dispatch = useDispatch();
  const genders = useSelector(state=> state.genders)

  function handleGenres (e) {
    e.preventDefault();
    dispatch(filterByGenres(e.target.value));
  }


  return (
    <>
    <div>
     {/* <p> Filter by genres:</p> */}
    </div>
    <div>
      <select onChange={e=>handleGenres(e)}>
      <option value="all">All</option>
      {
       genders && genders.map(e=>(
            <option key={e.name} value={e.name}  >{e.name}</option>
        ))
      }
      </select>
    </div>
    </>
  )
}
export default FilterBygeners;