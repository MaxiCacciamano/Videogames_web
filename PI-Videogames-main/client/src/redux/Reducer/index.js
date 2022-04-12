import {GET_VIDEOGAMES} from '../../Constant/index'

const initialState = {
    videogame:[]
}

export default function rootReducer(state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case GET_VIDEOGAMES:
            return{
                ...state,
                videogame: action.payload
            }
    }
}