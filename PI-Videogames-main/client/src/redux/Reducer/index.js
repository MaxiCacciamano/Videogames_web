
const initialState = {
    videogames:[],
    videogame:[],
    genres:[],
    platforms:[],
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
                videogames: action.payload,
                allVideoGames: action.payload
                
            }
        case "GET_GENRES":
            return{
                ...state,
                genres: action.payload
            }
        case "GET_PLATFORMS":
            return{
                ...state,
                platforms: action.payload
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
            const allStateGames = state.allVideoGames
            const tempGames = allStateGames.filter(p => {
                if(p.genres){ 
                    const genres = p.genres.map( p => p.name)
                    return genres.includes(action.payload)}

            })           
            return {
                ...state,
                videogames: action.payload === 'sinFiltro' ? allStateGames : tempGames,

            }

            case "FILTER_BY_ORIGEN":
                    const origen = action.payload === "Created" ? state.videogame.filter(el => el.createdInDatabase) : state.videogame.filter(el => !el.createdInDatabase)
                    return {
                        ...state,
                        videogames: action.payload === "All" ? state.videogame : origen
                    }  
            default:
                return state;
    }
}