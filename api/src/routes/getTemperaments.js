const { Temperament } = require('../db');

module.exports = async function getTemperaments(req, res) {
    const allTemps = await Temperament.findAll();
    res.send(allTemps);
};