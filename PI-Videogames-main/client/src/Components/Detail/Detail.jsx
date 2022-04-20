import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getVideogamesDetail} from "../../redux/Actions/index"
import {Link} from 'react-router-dom';

export const Detail = () => {
    const allDetail = useSelector((state)=>state.detail)
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)
    // const detail = useSelector((state)=> state.detail)
  useEffect(() => {
      dispatch(getVideogamesDetail(id));
    },[dispatch, id])
    
    // console.log(allDetail)

  return (
        <div>
            <br/><br/>
            <Link to="/home"><button>Back</button></Link>
            <br /><br />
            {allDetail ? 
            <div>
                <div>
                    <h1>Name:<br/>{allDetail.name}<br/></h1>
                </div>
                <div>
                    <img src={allDetail.background_image}/>
                </div>
                <div>
                    <p>Genres:<br/>{allDetail.genres}<br/></p>
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

    // <>
    {/* {myCharacter.length>0?(
        <div>
            <br/><br/>
            <Link to="/home"><button>Back</button></Link>
            <br /><br /><br />

            <div>
                <h1>Name:{myCharacter[0].name}</h1>
            </div>
            <img src={myCharacter[0].image} alt="image not found"/>
            <div>
                <h3>Release date: {myCharacter[0].released}</h3>
            </div>
            <div>
                <h3>Rating:{myCharacter[0].rating}</h3>
            </div>
            <div>
                <h3>Description: {myCharacter[0].description? myCharacter[0].description:"Does not contain description"}</h3>
            </div>
            <div>
                <h3>Genres: {myCharacter[0].genres? myCharacter[0].genres.map(e=>e.name,","):myCharacter[0].genre.map(e=>e.name,+",")}</h3>
            </div>
            <div>
                <h3>Platforms:{Array.isArray(myCharacter[0].platform ? myCharacter[0].platform.map(e=>e.platform.name+","):"Pc")}</h3>
            </div>
        </div>
    ):(
        <div>
            <h1>Cragando..</h1>
        </div>
    )} */}
    // </>