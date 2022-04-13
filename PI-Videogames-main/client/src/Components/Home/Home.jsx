import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Card} from '../VideoGame/Card'
import {getAll} from '../../redux/Actions/index';

export const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const {videogames} = useSelector(state=>state);
  const [videoGamesPerPage] = useState(15);
  // const characters = useSelector(state => state.videogames);
  const indexLastvideogames = currentPage * videoGamesPerPage;
  const indexFirstVideogames = indexLastvideogames - videoGamesPerPage;
  const currentVideogames = videogames.slice(indexFirstVideogames, indexLastvideogames);

  return (
    <>
    <div>
       <h1>video games for you</h1>
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
