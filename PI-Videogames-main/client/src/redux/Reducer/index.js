import {GET_VIDEOGAMES} from '../../Constant/index'

const initialState = {
    videogames:[],
    videogame:[],
    genres:[],
    name:"",
    order:""
}

export default function rootReducer(state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case "GET_VIDEOGAMES":
            return{
                ...state,
                videogames: action.payload
            }
        case "GET_GENRES":
            return{
                ...state,
                genres: action.payload
            }
        case "SET_ORDER":
                return {
                    ...state,
                    order: action.payload
            } 
            default:
                return state;
    }
}