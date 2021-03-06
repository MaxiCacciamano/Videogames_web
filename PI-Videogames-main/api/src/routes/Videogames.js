const { KEY_API } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Videogame, Genre, Platforms } = require('../db');
const VideogamesC = require('../controllers/VideogamesC');


const getApiVideogames = async ()=>{
    try{
        let arrayGames = [];
        //traigo los primeros 100
        for(let i = 1; i< 6;i++){
            const gamesApi = await axios.get(`https://api.rawg.io/api/games?key=${process.env.KEY_API}&page=${i}`);
            arrayGames.push(gamesApi.data.results);
            arrayGames.flat().length
        }
        const infoGames = arrayGames.flat().map(game=>{
            return{
                id: game.id,
                name: game.name,
                image: game.background_image,
                description: game.description_raw,
                released: game.released,
                rating: game.rating,
                genres: game.genres.map(gen=>{
                    return{
                        id: gen.id,
                        name: gen.name
                    }
                }),
                platforms: game.platforms.map(plat=>{
                    return{
                        id: plat.platform.id,
                        name: plat.platform.name
                    }
                })
            }
        })
        return infoGames;

    }
    catch(e){
        console.log(e)
    }
}

const getDbGames = async ()=>{
    try{

        const DbInfo = await Videogame.findAll({
            include: [
                {
                    model: Genre,
                    attributes: ['name'], 
                    through: {
                        attributes: []
                    }
                },
                {
                    
                    model : Platforms,
                    attributes: ['name'],
                    through:{
                        attributes: {}
                    }
                }
            ]
        })
        return DbInfo;
    }
    catch(e){console.log("Algo slaio mal al traer videojuegos desde la base de datos",e)}
}

const getAll = async ()=>{
    try{
        const gamesApi = await  getApiVideogames();
        const gamesDb = await  getDbGames();
        const allGames = gamesApi.concat(gamesDb);
        return allGames;

    }
    catch(e){console.log(e)}
}

router.get('/', async(req,res)=>{
    try{

        const {name} = req.query
        let games = await getAll();
        if(name){ 
            let gamesName = games.filter(game=>game.name.toLowerCase().includes(name.toLocaleLowerCase()));
            if(gamesName.length){
                res.status(200).json(gamesName)
            }else{
                res.status(404).send({msg: "Game not found"})
            }
        }else{
            res.status(200).json(games)
        }
    }
    catch(e){console.log(e)}
})


router.get('/:id', VideogamesC.idVideoGames);
router.post('/videogame',VideogamesC.postGames)






module.exports = router;