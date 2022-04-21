import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getVideogamesById, getAll} from "../../redux/Actions/index"
import {Link} from 'react-router-dom';

export const Detail = () => {
    const allDetail = useSelector((state)=>state.detail)
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)
    // const detail = useSelector((state)=> state.detail)
  useEffect(() => {
      dispatch(getVideogamesById(id));
    },[dispatch, id])
    

    
    // console.log(allDetail,"hola")

  return (
      
        <div>
    
            <br/><br/>
            <Link to="/home"><button>Back</button></Link>
            <br /><br />
            {allDetail.name ? 
            <div>
                <div>
                    <h1>Name:<br/>{allDetail.name}<br/></h1>
                </div>
                <div>
                    <img src={allDetail.image}/>
                </div>
                <div>
                    <p>Description:<br/>{allDetail.description}<br/></p>
                </div>
                <div>
                    <p>Release Date:<br/>{allDetail.releaseDate}<br/></p>
                </div>
                <div>
                    <p>Rating:<br/>{allDetail.rating}<br/></p>
                </div>
                <div>
                    <ul>

                    Genres: {allDetail.genres.map(gen=>{
                        return(
                            <li  key={gen.name}>{gen.name}</li>
                        )
                    })}
                    </ul>
                </div>
                <div>
                    <p>Plataforms:<br/>{allDetail.platforms}<br/></p>
                </div>
            </div>  : 
                <div>
                    <h1>CARGANDO...</h1>                  
                </div>
              }
        </div>
    )
}
export default Detail;