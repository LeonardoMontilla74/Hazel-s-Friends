const axios = require('axios');
const { Dog, Temperament } = require('../db');
const URL = 'https://api.thedogapi.com/v1/breeds';

module.exports = async function getDogs(req, res, next) {
    const { name: findName } = req.query;

    if (findName) {
        try {
            const findOnApi = await axios.get(`${URL}/search?q=${findName}`);
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

            if (dogOfApi.length !== 0) {
                return res.send(dogOfApi);

            } else {
                const findOfDB = await Dog.findOne({
                    were: {
                        name: findName
                    }
                });

                if (findOfDB.length !== 0) {
                    return res.send(findOfDB);
                }
            }
            res.status(404).send(`No se encontro ningún perro con el nombre ${findName}`);

        } catch (error) {
            next(error);
        }

    } else { // desde aqui envio todos los perros.. tanto los de DB mas los de la API
        try {
            //busco en mi DB
            const dogsOfDB = await Dog.findAll({ include: Temperament });

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
                    image: dog.image.url,
                    temperament: dog.temperament
                };
            });
            res.send([...dogsOfDB, ...dogsOfApi]);
        } catch (error) {
            next(error);
        }
    }
};
/* Detalles minimos que se deben mostrar en la página principal
Imagen
Nombre
Temperamento
Peso
*/