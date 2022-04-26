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
import style from './home.module.css'

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
    <header>
    <div className={style.title}>
       <h1>video games for you</h1>
    </div> 
    <div className={style.filtros}>
    {/* <ul>
    <li>    
    <Link to="/createVideogames">
      Create videogames
    </Link>  
    </li>
    </ul> */}
    <ul>
      <li>
      <div>
      <button onClick={e=>handleRefresh(e)}>
        Refresh
      </button>
    </div>
      </li>
      <li>   
      <SearchBar/>
      </li>
      <li>
    
      <OrderByName/>
    
      </li>
      <li>
    
      <OrderByRating/>
    
      </li>
      <li>
    
      <FilterBygeners/>
    
      </li>
      <li>
    
      <FilterByOrigen/>
    
      </li>
      <li className={style.create}> 
      <Link to="/createVideogames">
        Create videogames
      </Link>  
      </li>
    </ul>
    </div>
    </header>
     <section> 
    <div className={style.cardscontainer} >
       {
         currentVideogames?.length > 0?
         currentVideogames?.map(e=>{
           return <Card className={style.grid} image={e.image} name={e.name} genres={e.genres} id={e.id} key={e.id}/>
         })
         :
         <h1 className={style.cargando}>Cragando....</h1>
       }
    </div>
    <div>
      <Paginado 
      videoGamesPerPage={videoGamesPerPage}
      videogames={videogames.length}
      pagination={pagination}
      />
    </div>

    </section>
     <footer> 
      <p>proyecto p.i</p>
     </footer> 
    </>
  )
}
