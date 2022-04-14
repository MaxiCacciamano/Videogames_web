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


export const getGenres = () =>{
    return function(dispatch){
        return axios.get(`http://localhost:3001/genres/`)
        .then((data)=>{
            return dispatch({
                type: "GET_GENRES",
                payload: data.data
            })
        })
        .catch(e=>console.log('error en el getGneres de actions',e))
        
    }
}
export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}


export function setOrder (order) {
    return {
        type: "SET_ORDER",
        payload: order
    }
}