const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds';
const { Dog, Temperament } = require('../db');

module.exports = async function getDogID(req, res, next) {
    const { idRaza } = req.params;

    try { // busca en la api primero
        const dogsOfApi = await axios.get(URL);
        const findOnApi = dogsOfApi.data.filter((dog) => dog.id == idRaza);
        const resultApi = findOnApi.map((dog) => {
            return {
                id: dog.id,
                name: dog.name,
                image: dog.image.url,
                temperaments: dog.temperament,
                height: dog.height.metric,
                weight: dog.weight.metric,
                life: dog.life_span,
                origin: dog.origin,
                bred_for: dog.bred_for
            };
        });

        if (findOnApi.length) {
            return res.send(resultApi);

        } else { //sino busca en la base de datos entre los creados
            const dogsOfDB = await Dog.findAll({ include: Temperament });
            for (const dog of dogsOfDB) {
                if (dog.dataValues.id == idRaza) {
                    const resultOfDB = {
                        name: dog.name,
                        image: dog.image,
                        temperaments: dog.temperaments.map((temp) => temp.name).join(', '),
                        weight: dog.weight_min.toString() + ' - ' + dog.weight_max.toString(),
                        height: dog.height_min.toString() + ' - ' + dog.height_max.toString(),
                        life: dog.life.toString() + ' years',
                    };
                    if (dog.origin) resultOfDB.origin = dog.origin;
                    if (dog.bred_for) resultOfDB.bred_for = dog.bred_for;

                    return res.send([resultOfDB]);
                }
            }
        }
        res.status(404).send('No se encontró el perro con el Id ' + idRaza);

    } catch (error) {
        next(error);
    };
};