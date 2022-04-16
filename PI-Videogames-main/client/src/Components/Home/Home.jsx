import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Card} from '../VideoGame/Card'
import OrderByName from '../Order/OrderByName'
import Paginado from '../Paginado/Paginado';
import {getAll} from '../../redux/Actions/index';

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

  return (
    <>
    <div>
       <h1>video games for you</h1>
    </div> 
    <div>
      <OrderByName
      setCurrentPage={setCurrentPage}
      />
    </div>
    <div>
      <Paginado 
      videoGamesPerPage={videoGamesPerPage}
      videogames={videogames.length}
      pagination={pagination}
      />
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
    </>
  )
}
