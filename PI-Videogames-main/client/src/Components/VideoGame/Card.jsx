import React from 'react'
import {Link} from 'react-router-dom';

export const Card = ({id,name, genres, image, platforms}) => {
    const Arraygenres = function (){
      let arraygenres=[];
      if (genres){
        for(let genre of genres){
          typeof msj === 'object'?arraygenres.push(genre):arraygenres.push(genre.name)
        }
      }
      return arraygenres.length ? arraygenres.join(', '):'Genres not found'
    }

    const arrayPlatforms = function(){
      let arrayplatforms = [];
      if(platforms){
        for(let platfomrsA of platforms){
          typeof msj === 'object'?arrayplatforms.push(platfomrsA):arrayplatforms.push(platfomrsA.name)
        }
        return arrayplatforms.length ? arrayplatforms.join(', '):'Platform not found';
      }
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
       <p>{arrayPlatforms()}</p>
    </div>
    <div>
       <button >About</button>
    </div>
    </>
  )
}
