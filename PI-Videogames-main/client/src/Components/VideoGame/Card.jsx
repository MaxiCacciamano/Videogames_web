import React from 'react'
import {Link} from 'react-router-dom';
import style from './card.module.css';

export const Card = ({id,name, genres, image, platforms}) => {
    const Arraygenres = function (){
      let arraygenres=[];
      if (genres){
        for(let gen of genres){
          typeof msj === 'object'?arraygenres.push(gen):arraygenres.push(gen.name)
        }
      }
      return arraygenres.length ? arraygenres.join(', '):'Genres not found'
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
          <br />
          <p>Genres:</p>
          <p>{Arraygenres()}</p>
          <br />

          <div className = "card-footer">
         <Link to={`/detail/${id}`}>
            <button>Read More</button>
         </Link>
          </div>
          </div>
        </div>
    </div>

            
  )
}
