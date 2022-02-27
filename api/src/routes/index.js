const { Router } = require('express');
const getDogs = require('./getDogs');
const getTemperaments = require('./getTemperaments');
const postDog = require('./postDog')

const router = Router();

router.get('/dogs', getDogs);
router.get('/temperaments', getTemperaments);
router.post('/dog', postDog)

module.exports = router;
