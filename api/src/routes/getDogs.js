const axios = require('axios');
const { Dog } = require('../db');
const URL = 'https://api.thedogapi.com/v1/breeds';

module.exports = async function getDogs(req, res) {
    const { name } = req.query;

    if (name) {
        const findOnApi = await axios.get(`${URL}/search?q=${name}`);
        console.log(findOnApi);
        const dogOfApi = findOnApi.data.map((dog) => {
            return {
                id: dog.id,
                name: dog.name,
                height: dog.height.metric,
                weight: dog.weight.metric,
                life: dog.life_span,
                origin: dog.origin,
                bred_for: dog.bred_for
            };
        });

        if (dogOfApi.length) {
            return res.send(dogOfApi);
        } else {
            const findOfDB = await Dog.findOne({
                were: {
                    name: name
                }
            });
            if (findOfDB.length) {
                res.send(findOfDB);
            }
            res.status(404).send(`No se encontro ningún perro con el nombre ${name}`);
        }
    } else { // desde aqui envio todos los perros.. tanto los de DB mas los de la API
        //busco en mi DB
        const dogsOfDB = await Dog.findAll();

        //busco en la Api
        const findOfApi = await axios.get(URL);
        const dogsOfApi = findOfApi.data?.map((dog) => {
            return {
                name: dog.name,
                height: dog.height.metric,
                weight: dog.weight.metric,
                life: dog.life_span,
                origin: dog.origin,
                bred_for: dog.bred_for,
                image: dog.image.url
            };
        });
        res.send([...dogsOfDB, ...dogsOfApi]);
    }
};