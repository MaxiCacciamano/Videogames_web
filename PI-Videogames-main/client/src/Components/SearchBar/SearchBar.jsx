import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { getVideogamesName, getAll} from '../../redux/Actions/index'


export const SearchBar = () => {
    const dispatch = useDispatch();
    const[name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getVideogamesName(name))
    }

    function handleInput(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }

    function handleRefresh(e){
      e.preventDefault();
      dispatch(getAll());
    }
  

  return (
    <>
        <div>
      <button onClick={e=>handleRefresh(e)}>
        Refresh
      </button>
    </div>
    
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input
      type="text"
      placeholder="Search videogame"
      onChange={e=>handleInput(e)}
      />

      <button 
      type="submit" 
      >🔍</button>
    </form>
    </>
  )
}
export default SearchBar;
