
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenres, getGenres } from '../../redux/Actions/index';

const FilterByGenres = () => {
    const genres = useSelector(state => state.genders)
    const dispatch = useDispatch();


    const handleSelectGenres = (e) => {
        e.preventDefault();
        dispatch(filterByGenres(e.target.value));
    }
    
    return (
        <div>
            <select onChange = {handleSelectGenres}>
                <option value="sinFiltro">Generos</option>
                {
                    genres.map((el) => {
                        return (
                            <option value = {el.name} name = "genres" key={el.id} >{el.name}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}
 
export default FilterByGenres;




// import React, {useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux';
// import {filterByGenres, getGenres} from '../../redux/Actions';

// const FilterBygeners = () =>  {

//   const genres = useSelector((state)=> state.genders)
//   const dispatch = useDispatch();

  
//   useEffect (() => {
//     dispatch(getGenres())
//   }, [dispatch])
//   function handleGenres (e) {
//     dispatch(filterByGenres(e.target.value));
//   }

//   return (
//     <>
//     <div>
//      {/* <p> Filter by genres:</p> */}
//     </div>
//     <div>
//       <select onChange={e=>handleGenres(e)}>
//       <option value="All">All</option>
//       {
//         genres.map((e)=>{
//           return(
//             <option key={e.id} name="genres" value={e.name} >{e.name}</option>
//           )
//         })
//       }
//       </select>
//     </div>
//     </>
//   )
// }
// export default FilterBygeners;