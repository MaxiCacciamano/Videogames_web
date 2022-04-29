const axios = require('axios');
const {KEY_API} = process.env
const {Videogame, Genre, Platforms} = require('../db');

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
                    
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Platforms,
                        }
                    ]
                },)
                const dateDb={
                    id: videogameDb.id,
                    name: videogameDb.name,
                    description: videogameDb.description,
                    released: videogameDb.released,
                    rating: videogameDb.rating,
                    image: videogameDb.image,
                    genres: videogameDb.genres.map((e)=>{
                        return {
                            name: e.name
                        }
                    }),
                    platforms: videogameDb.platforms.map((p)=>{
                        return {
                            name: p.name.toString(),
                        }
                    })
                    
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
             genre,
             platforms,
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
            let genresDB = await Genre.findAll({
                where:{
                    name: genre
                }
            })
            let platformsDB = await Platforms.findAll({
                where:{
                    name: platforms
                }
            })
            createGame.addGenre(genresDB);
            createGame.addPlatform(platformsDB);
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