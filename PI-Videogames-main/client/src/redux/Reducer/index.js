
const initialState = {
    videogames:[],
    videogame:[],
    genders:[],
    detail:[],
    allVideoGames:[], // para ordenamiento
}

export default function rootReducer(state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case "GET_VIDEOGAMES":
            return{
                ...state,
                videogame: action.payload,
                videogames: action.payload
                
            }
        case "GET_GENRES":
            return{
                ...state,
                genders: action.payload
            }
        case "GET_VIDEOGAMES_NAME":
            return{
                ...state,
                videogame: action.payload
            }
        
        case "GET_DETAILS_GAMES":
            return {
                ...state,
                detail: action.payload
    
                }

        case "POST_VIDEOGAMES":
            return{
                ...state 
            }
        case "ORDER_BY_NAME":
            let sortedArr = action.payload === 'asc' ? state.videogames.sort(function (a, b){
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              }) :
              state.videogames.sort(function (a, b) {
                if (a.name > b.name) {
                  return -1;
                }
                return 0;
              })
            return {
              ...state,
              videogames: sortedArr
            }
        case "ORDER_BT_RATING":
            if(action.payload === 'asc'){
                const ratingOrder = state.videogame.sort(function (a,b){
                    return a.rating - b.rating
                })
                return {
                    ...state,
                    videogames: ratingOrder
                }
            }
            if(action.payload === 'desc'){
                const ratingOrder = state.videogame.sort(function (a,b){
                    return b.rating - a.rating
                })
                return{
                    ...state,
                    videogames: ratingOrder
                }
            }
            return state;


        
        case "FILTER_BY_GENRES":
            const allVideogames= state.allVideoGames
            const VideogasmesFilter = 
            action.payload === "All"
            ? allVideogames
            : allVideogames.filter(e=>e.genres === action.payload)
            return{
                ...state,
                videogames: VideogasmesFilter 
            }
            // var genFilter = function(arr) {
            //     var aux = arr.filter(e => e.name === action.payload)
            //     if(aux.length > 0){
            //         console.log('algo')
            //         return true
            //     }else{
            //         console.log('nada')
            //         return false
            //     }
            // }
            // var filtrados = action.payload === 'All'
            //  ?  allVideoGames : 
            //   allVideoGames.filter(e => genFilter(e.genders)) //filtro el state que siempre tiene 
            // return{
            //     ...state,
            //     videogames: filtrados //renderizo el state pisable
            //     } 
            
            case "FILTER_BY_ORIGEN":
                    const origen = action.payload === "Created" ? state.videogame.filter(el => el.createdInDatabase) : state.videogame.filter(el => !el.createdInDatabase)
                    return {
                        ...state,
                        videogames: action.payload === "All" ? state.videogame : origen
                    }  
                // const origVg = state.allVgGenders
                // const origen = action.payload === "Created" ? origVg.filter(e=> e.origin === "Created"): origVg.filter(e=> e.origin === "Api")
                // return{
                //     ...state,
                //     videogames: action.payload === "All"?state.allVgGenders:origen
                // }

            default:
                return state;
    }
}