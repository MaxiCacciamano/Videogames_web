import React from 'react'
import {Link} from 'react-router-dom';

export const Card = ({id,name, genres, image}) => {
    const Arraygenres = function (){
      let araygenres=[];
      if (genres){
        for(let genre of genres){
          typeof msj === 'object'?araygenres.push(genre.name):araygenres.push(genre)
        }
      }
      return araygenres.length ? araygenres.join(','):'Genres not found'
    }


  return (
    <>
    <div>
        <img src={image} alt="Not found"/>
    </div>
    <div>
       <h2>{name}</h2>
       <p>{Arraygenres()}</p>
        </div>
    <div>
       <Link to={`/detail/${id}`}>
       <button >About</button>
       </Link>
    </div>

    </>
  )
}
