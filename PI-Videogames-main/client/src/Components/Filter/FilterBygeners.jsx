import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {filterByGenres} from '../../redux/Actions';

const FilterBygeners = () =>  {

  const genders = useSelector(state=> state.genders)
  const dispatch = useDispatch();

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
      <option value="All">All</option>
      <option name = "genres"></option>
      {
       genders && genders.map(e=>(
            <option key={e.name} name={e.geners} value={e.name}  >{e.name}</option>
        ))
      }
      </select>
    </div>
    </>
  )
}
export default FilterBygeners;