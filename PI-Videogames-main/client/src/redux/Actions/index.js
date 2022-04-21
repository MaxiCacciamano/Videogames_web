import axios from 'axios';


export function getAll  ()  {
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

export function getVideogamesName (name){
    return function (dispatch) {
       return axios.get(`http://localhost:3001/videogame?name=${name}`)
        .then(data => {
            return dispatch({
                type: "GET_VIDEOGAMES",
                payload: data.data
            })
        })
        .catch((error)=>{
            alert("El personaje solicitado no existe")
            console.log(error ,"error en getVideogamesName")
        })
    }
}


export function getVideogamesById (id) {
    if(id){
        return async function(dispatch) {
            try{
                const {data}= await axios.get(`http://localhost:3001/videogame/${id}`);
                // console.log(data,"aca estoy")
                if (data.createdInDatabase){
                    const II = data.genres.map(e=> Object.values(e.name).join(''))
                    data.genres=II
                }
                if(!data.createdInDatabase){
                    data.description = data.description.replace(/(<([^>]+)>)/ig, '')
                }
                return dispatch({
                    type: "GET_DETAILS_GAMES",
                    payload: data
                })
            }
            catch(e){
                console.log("error en getvideogamesbyid", e)
            }
        }
    }
}
    
//     return async function (dispatch) {
//         try {
//             const detail = await axios.get(`http://localhost:3001/videogame/${id}`);
//             return dispatch ({
//                 type: "GET_DETAILS_GAMES",
//                 payload: detail.data
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }

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
//---conexion entre el back y el front de forma asincrona---
export function postVideogames(payload){
    return async function(dispatch){
        const res = await axios.post(`http://localhost:3001/videogame/videogame`, payload);
        console.log(res)
        return res;
    }
}
//----------------------------------------------------------
export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByRating(payload) {
    return {
        type: 'ORDER_BT_RATING',
        payload
    }
}

export function setOrder (order) {
    return {
        type: "SET_ORDER",
        payload: order
    }
}

export function filterByGenres (payload){
    return {
        type: "FILTER_BY_GENRES",
        payload
    }
}

export function filterByOrigen(payload){
    return {
        type: "FILTER_BY_ORIGEN",
        payload
    }
}