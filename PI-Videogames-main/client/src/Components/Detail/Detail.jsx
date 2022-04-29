import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getVideogamesById, getAll, removeDetail} from "../../redux/Actions/index"
import {Link} from 'react-router-dom';
import  './detail.modules.css';


export const Detail = () => {
    const allDetail = useSelector((state)=>state.detail)
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)
    // const detail = useSelector((state)=> state.detail)
  useEffect(() => {
      dispatch(getVideogamesById(id));
      return (()=>{
          dispatch(removeDetail())
      })
    },[dispatch])
    

    
    // console.log(allDetail,"hola")

  return (
      
        <div className="cargadno">
            <div className="but">
            <br/><br/>
            <Link to="/home"><button >Back</button></Link>
            <br /><br />
            </div>

            {allDetail.name ? 
            <div  >
                <div className="tarje">
                    <h1 >Name:</h1>
                    <p> <br/>{allDetail.name}<br/>  </p>
                </div>
                <div className="tarje-image">
                    <img src={allDetail.image}/>
                </div>
                <div className="des">
                    <p >Description:<br/>{allDetail.description}<br/></p>
                </div>
                <div className="container">
                <div className="descrip">
                    <p >Release Date:<br/>{allDetail.releaseDate}<br/></p>
                </div>
                <div className="descrip">
                    <p >Rating:<br/>{allDetail.rating}<br/></p>
                </div>
                <div className="descrip" >
                    <p>Genres: </p>
                    <ul>
                     {allDetail.genres.map(gen=>{
                        return(
                            <li  >{gen.name}</li>
                        )
                    })}
                    </ul>
                </div >
            {
                <div className="descrip">
                <p>
                      <strong>Platforms</strong>:
                      {
                          allDetail.platforms === "string"
                          ?allDetail.platforms.map(plat=>plat)
                          :allDetail.platforms.map(p=>p.name).join(",")
                        }
                        </p>
            </div>
            }
                    {/* <div className="descrip"> 
                        <p>Platforms:</p>

                         {allDetail.platforms.map(plat=>{
                            return(
                                <li key={plat.id}>{plat}</li>
                            )
                        })}
                    </div> */}
                    
            </div>  
                </div> : 
                <div >
                    <h1>CARGANDO...</h1>                  
                </div>
              }
        </div>
    )
}
export default Detail;