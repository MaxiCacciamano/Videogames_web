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
                
                {pagNumbers?.map(e=>{
                    <li >
                        <button onClick={()=> pagination(e)}>{e}</button>
                        {/* <a onClick={()=> totalPages(e)}>{e}</a> */}
                    </li>
                })}
            </ul>        
        </>
    )
}