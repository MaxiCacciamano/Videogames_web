const { Platforms} = require('../db');
const axios = require('axios');
const {op} = require('sequelize');
const { KEY_API } = process.env;

const getPlatformsApi = async (req,res,next) => {
try{
    const PlatformsDb = await Platforms.findAll()
    if(PlatformsDb.length)return res.send(PlatformsDb)

    const resPlatforms = await axios.get(`https://api.rawg.io/api/platforms?key=${KEY_API}`)
    const platformsResult = resPlatforms.data.results
    platformsResult.forEach(async p => {
        await Platforms.findOrCreate({
            where: {
                name: p.name,
            }
        })
    });

    const platformsReady = platformsResult.map(game=>{
        return{
            id: game.id,
            name: game.name
        }
    })
    
    return res.status(200).send(platformsReady)


 }
catch(err){
    next(err);
    res.status(404).send("error al cargara plataformas en la base de datos")
}

}

module.exports={
    getPlatformsApi
}