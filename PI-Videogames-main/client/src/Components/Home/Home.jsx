import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Card} from '../VideoGame/Card'
import OrderByName from '../Order/OrderByName'
import OrderByRating from '../Order/OrderByRating'
import Paginado from '../Paginado/Paginado';
import FilterBygeners from '../Filter/FilterBygeners';
import FilterByOrigen from '../Filter/FilterByOrigen';
import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import {getAll} from '../../redux/Actions/index'

export const Home = () => {
  const dispatch = useDispatch();
  const {videogames} = useSelector(state=>state);
  const [currentPage, setCurrentPage] = useState(1);
  const [videoGamesPerPage] = useState(15);
  // const characters = useSelector(state => state.videogames);
  const indexLastvideogames = currentPage * videoGamesPerPage;
  const indexFirstVideogames = indexLastvideogames - videoGamesPerPage;
  const currentVideogames = videogames.slice(indexFirstVideogames, indexLastvideogames);

  const pagination = ( e) => {
    setCurrentPage(e);
  };

  function handleRefresh(e){
    e.preventDefault();
    dispatch(getAll());
  }

  return (
    <>
    <div>
       <h1>video games for you</h1>
    </div> 
    <div>
      <button onClick={e=>handleRefresh(e)}>
        Refresh
      </button>
    </div>
    <div>
      <Link to="/createVideogames">
        Create videogames
      </Link>
    </div>
    <div>
      <SearchBar/>
    </div>
    <div>
      <OrderByName/>
    </div>
    <div>
      <OrderByRating/>
    </div>
    <div>
      <FilterBygeners/>
    </div>
    <div>
      <FilterByOrigen/>
    </div>
    <div>
       {
         currentVideogames?.length > 0?
         currentVideogames?.map(e=>{
           return <Card image={e.image} name={e.name} genres={e.genres} id={e.id} key={e.id}/>
         })
         :
         <h1>Cragando....</h1>
       }
    </div>
    <div>
      <Paginado 
      videoGamesPerPage={videoGamesPerPage}
      videogames={videogames.length}
      pagination={pagination}
      />
    </div>
    </>
  )
}
