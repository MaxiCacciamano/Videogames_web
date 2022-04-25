import React from 'react'
import {Link} from 'react-router-dom';
import style from './card.module.css';

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
    // container
  <div className = {style.main}>
     {/* <div className = {style.card}> */}
     {/* card */}
        <div className = {style.box}>  
          <div className = {style.imgBx}>
            <img src={image} alt="img not found" />
          </div>
          <div className = {style.content}>
          <p>{name}</p>
          <p>{Arraygenres()}</p>
          <p>{arrayPlatforms()}</p>
         <Link to={`/detail/${id}`}>
            <button>Read More</button>
         </Link>
          </div>
        </div>
    </div>

            
  )
}
