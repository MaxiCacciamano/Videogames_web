import axios from 'axios';
import { GET_VIDEOGAMES } from '../../Constant/index';


export const getAll = () => {
    return function(dispatch){
        return  axios.get(`http://localhost:3001/videogame/`)
        .then((data)=>{
            return dispatch({
                type: "GET_VIDEOGAMES",
                payload: data.data
            })
        })
        .catch(e=>console.log(e,'error en el getAll de actions'));
    }
}