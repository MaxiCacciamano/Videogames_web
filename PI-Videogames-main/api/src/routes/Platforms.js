const {Router} = require('express');
const router = Router();
const axios = require('axios').default;
const { Platforms } = require('../db');
const { KEY_API } = process.env;
const PlatformsC = require('../controllers/PlatformsC')

router.get('/', PlatformsC.getPlatformsApi);

module.exports = router;