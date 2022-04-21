import React from 'react'
import {Link} from 'react-router-dom';

export const Card = ({id,name, genres, image}) => {
    const Arraygenres = function (){
      let arraygenres=[];
      if (genres){
        for(let genre of genres){
          typeof msj === 'object'?arraygenres.push(genre):arraygenres.push(genre.name)
        }
      }
      return arraygenres.length ? arraygenres.join(', '):'Genres not found'
    }


  return (
    <>
    <div>
      <Link to={`/detail/${id}`}>
        <img src={image} alt="Not found"/>
      </Link>
    </div>
    <div>
       <h2>{name}</h2>
       <p>{Arraygenres()}</p>
    </div>
    <div>
       <button >About</button>
    </div>
    </>
  )
}
