const { Gender} = require('../db');
const axios = require('axios');
const {op} = require('sequelize');
const { KEY_API } = process.env;

const getGenresApi = async(req, res, next)=>{
    try{
        const GenresDB = await Gender.findAll();
        if(GenresDB.length) return res.send(GenresDB) //si existe los saco de la bd 

        const resGenres = await axios.get(`https://api.rawg.io/api/genres?key=${KEY_API}`);
        const genresResults = resGenres.data.results;
        genresResults.forEach(async g => {
            await Gender.findOrCreate({
                where: {
                    name: g.name
                }
            })
        })
       
        const genresREADY = genresResults.map(game => {
            return{
                id: game.id,
                name: game.name
            }
        });
       return res.status(200).send(genresREADY)
    }
    catch(e){
        return res.status(404).send("Not found")
        console.log("error al traer los genres", e)
    }
}
module.exports ={
    getGenresApi
}