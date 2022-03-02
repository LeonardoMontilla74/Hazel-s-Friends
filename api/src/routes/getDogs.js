const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { API_KEY } = process.env
const URL = 'https://api.thedogapi.com/v1/breeds';

module.exports = async function getDogs(req, res, next) {
    //busco todos los perros para luego trabajar con ellos...
    const dogsOfDB = await Dog.findAll({ include: Temperament });
    const dogsOfApi = await axios.get(URL + API_KEY);

    const { name } = req.query;
    if (name) {
        try {
            const findOnApi = dogsOfApi.data.filter((dog) => {
                if (dog.name.toLowerCase().includes(name.toLowerCase())) return dog;
            });

            const resultOfApi = findOnApi?.map((dog) => {
                return {
                    name: dog.name,
                    image: dog.image.url,
                    temperament: dog.temperament,
                    height: dog.height.metric,
                    weight: dog.weight.metric,
                    life: dog.life_span,
                    origin: dog.origin,
                    bred_for: dog.bred_for
                };
            })

            if (resultOfApi.length !== 0) {
                return res.send(resultOfApi);

            } else {
                if (dogsOfDB) {
                    for (const dog of dogsOfDB) {
                        if (dog.dataValues.name.toLowerCase().includes(name.toLowerCase())) {
                            const resultOfDB = {
                                name: dog.name,
                                image: dog.image,
                                temperaments: dog.temperaments.map((temp) => temp.name).join(', '),
                                weight: dog.weight,
                                height: dog.height,
                            };
                            if (dog.life) resultOfDB.life = dog.life;
                            if (dog.origin) resultOfDB.origin = dog.origin;
                            if (dog.bred_for) resultOfDB.bred_for = dog.bred_for;

                            return res.send(resultOfDB);
                        }
                    }
                }
            }
            res.status(404).send(`No se encontro ningún perro con el nombre ${name}`);

        } catch (error) {
            console.error(error);
            next(error);
        }
    } else {
        const allDogsApi = dogsOfApi.data?.map((dog) => {
            return {
                name: dog.name,
                image: dog.image.url,
                temperament: dog.temperament
            };
        });

        const allDogsDB = dogsOfDB?.map((dog) => {
            return ({
                name: dog.name,
                image: dog.image,
                temperaments: dog.temperaments.map((temp) => temp.name).join(', ')
            });
        });

        res.send([...allDogsDB, ...allDogsApi]);
    }
};