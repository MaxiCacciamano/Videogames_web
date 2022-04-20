import React from 'react';

export default function Paginado({videoGamesPerPage, videogames, pagination}){
    const pagNumbers = [];
    const paginadoo = Math.ceil(videogames/videoGamesPerPage)
    for (let i = 1; i <= paginadoo;i++){
        pagNumbers.push(i)
    }
    return (
        <>
            <ul>
                
                {pagNumbers?.map(e=>(
                    <li key={e}>
                        <button onClick={()=> pagination(e)}>{e}</button>
                    </li>
    ))}
            </ul>        
        </>
    )
}