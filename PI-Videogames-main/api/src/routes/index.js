const { Router } = require('express');
const  VideogamesR = require('./Videogames.js')
const GenderR = require('./Gender')
const PlatformsC = require('./Platforms')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogame',VideogamesR);
router.use('/genres', GenderR);
router.use('/platforms', PlatformsC)
module.exports = router;
