import {GET_VIDEOGAMES} from '../../Constant/index'

const initialState = {
    videogames:[],
    genres:[]
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
            default:
                return state;
    }
}