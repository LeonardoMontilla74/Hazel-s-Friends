const { Router } = require('express');
const getDogID = require('./getDogID');
const getDogs = require('./getDogs');
const getTemperaments = require('./getTemperaments');
const postDog = require('./postDog')

const router = Router();

router.get('/dogs/:idRaza', getDogID);
router.get('/dogs', getDogs);
router.get('/temperaments', getTemperaments);
router.post('/dog', postDog)

module.exports = router;