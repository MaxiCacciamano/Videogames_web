const axios = require('axios');
const {KEY_API} = process.env
const {Videogame, Gender} = require('../db');

const idVideoGames = async(req,res,next)=>{
    try{
        const  ids  = req.params.id
        
        //verifico si es un juego creado y me trae el detalle de la DB
        if (ids.includes('-')) {
            try{

                const videogameDb = await Videogame.findOne({
                    where: {
                        id: ids,
                    },
                    include: Gender
                })
                const dateDb={
                    id: videogameDb.id,
                    name: videogameDb.name,
                    description: videogameDb.description,
                    released: videogameDb.released,
                    rating: videogameDb.rating,
                    image: videogameDb.image,
                    genres: videogameDb.genders.map((e)=>{
                        return {
                            name: e.name
                        }
                    }),
                    
                    //agregar plataformas
                }
                if(!videogameDb)return res.status(404).send("the game does not exist")
                return res.status(200).json(dateDb)
            }
            catch(e){
                next(e);
                console.log("error en el get de idvideogames");
            }
        } else {
            //else (si no es un juego creado, voy a buscar la info a la API)
            try {
                const response = await axios.get(`https://api.rawg.io/api/games/${ids}?key=${KEY_API}`);
                let { id, name, background_image, genres, description, released: releaseDate, rating, platforms } = response.data;
                genres = genres.map(g => {return { name: g.name}}); // de la API me trae un array de objetos, mapeo solo el nombre del genero
                platforms = platforms.map(p => p.platform.name); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
                return res.json({
                    id,
                    name,
                    image : background_image,
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
        const {
             name,
             description, 
             released, 
             rating,
             image,
             genres,
             createdInDatabase
            } = req.body
             const createGame = await Videogame.create({ 
                 name,
                 description,
                 released,
                 rating,
                 image,
                 createdInDatabase
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