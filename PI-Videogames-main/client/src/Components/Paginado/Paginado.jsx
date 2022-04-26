import React from 'react';
import style from './paginado.module.css'

export default function Paginado({videoGamesPerPage, videogames, pagination}){
    const pagNumbers = [];
    const paginadoo = Math.ceil(videogames/videoGamesPerPage)
    for (let i = 1; i <= paginadoo;i++){
        pagNumbers.push(i)
    }
    return (
        <>
        <div className={style.paginado}>
            <ul>
                
                {pagNumbers?.map(e=>(
                    <li key={e}>
                        <p onClick={()=> pagination(e)}>{e}</p>
                    </li>
    ))}
            </ul>        
        </div>
        </>
    )
}