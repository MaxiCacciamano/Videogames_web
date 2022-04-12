const {Router} = require('express');
const router = Router();
const axios = require('axios').default;
const { Gender } = require('../db');
const { KEY_API } = process.env;
const GenresC = require('../controllers/GenresC');





router.get('/', GenresC.getGenresApi);

module.exports = router;