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
        try { // con el 2do endpoint es mas facil pero no me trae la imagen PREGUNTAR AL CORRECTOR
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

            if (resultOfApi.length) {
                return res.send(resultOfApi);

            } else { // probar con un were si me da el tiempo xq de primera no me funcionó
                if (dogsOfDB) { // así puedo darle el formato que me pide la ruta de detalles
                    for (const dog of dogsOfDB) {
                        if (dog.dataValues.name.toLowerCase().includes(name.toLowerCase())) {
                            const resultOfDB = { // formato identico al de la api
                                name: dog.name,
                                image: dog.image,
                                temperaments: dog.temperaments.map((temp) => temp.name).join(', '),
                                weight: dog.weight_min.toString() + ' - ' + dog.weight_max.toString(),
                                height: dog.height_min.toString() + ' - ' + dog.height_max.toString(),
                                life: dog.life.toString() + ' years',
                            };
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
    } else { // si no hay un name como criterio de busqueda envio por defecto la ruta principal
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