const axios = require('axios');
const {KEY_API} = process.env
const {Videogame, Gender} = require('../db');

const idVideoGames = async(req,res,next)=>{
    try{
        const { idVideogame } = req.params
        
        //verifico si es un juego creado y me trae el detalle de la DB
        if (idVideogame.includes('-')) {
            let videogameDb = await Videogame.findOne({
                where: {
                    id: idVideogame,
                },
                include: Gender
            })
            //Parseo el objeto
            videogameDb = JSON.stringify(videogameDb);
            videogameDb = JSON.parse(videogameDb);
            
            //dejo un array con los nombres de genero solamente
            videogameDb.genres = videogameDb.genres.map(g => g.name);
            res.json(videogameDb)
        } else {
            //else (si no es un juego creado, voy a buscar la info a la API)
            try {
                const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${KEY_API}`);
                let { id, name, background_image, genres, description, released: releaseDate, rating, platforms } = response.data;
                genres = genres.map(g => g.name); // de la API me trae un array de objetos, mapeo solo el nombre del genero
                platforms = platforms.map(p => p.platform.name); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
                return res.json({
                    id,
                    name,
                    background_image,
                    genres,
                    description,
                    releaseDate,
                    rating,
                    platforms
                })
            } catch (err) {
                return console.log(err)
            }
        }
        }
        catch (e) {
            res.status(404).send({message: e.message})
            next(e)
            console.log("something went wrong at idVideoGames", e)
        }
        
};

const postGames= async(req,res,next)=>{
    try{
        const {name,
             description_raw, 
             released, 
             rating,
             background_image,
             genres,
             createdDb 
            } = req.body
             const createGame = await Videogame.create({ 
                 name,
                 description_raw,
                 released,
                 rating,
                 background_image,
                 createdDb
                });
            let genresDB = await Gender.findAll({
                where:{
                    name: genres
                }
            })
            createGame.addGender(genresDB);
            res.status(200).send("Video game created successfully");
            console.log(createGame);
        }
    catch(e){
        next(e)
        res.status(404).send({message: e.message})
        console.log("something went wrong at postGames",e)
    }
}
module.exports = {
    idVideoGames,
    postGames
}