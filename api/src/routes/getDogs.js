const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { API_KEY } = process.env
const URL = 'https://api.thedogapi.com/v1/breeds';
const URL_FLAG = 'https://api.thedogapi.com/v1/breeds/search?q='


module.exports = async function getDogs(req, res, next) {
    //busco todos los perros para luego trabajar con ellos...
    const allDogsAPI = await axios.get(URL + API_KEY);
    const allDogsDB = await Dog.findAll({ include: Temperament });

    function getImage(id) {
        if (id) {// resulta que no todos los perros traen imagen
            const dog = allDogsAPI.data.find(dog => dog.image.id === id);
            return dog.image.url;
        }
        return 'https://pixabay.com/es/illustrations/doguillo-perro-animal-cachorro-5353200'
    }

    const { name } = req.query;
    if (name) {
        try {
            const findOnApi = await axios.get(`${URL_FLAG}${name}&${API_KEY}`);
            const resultOfApi = findOnApi.data.map((dog) => {
                return {
                    id: dog.id,
                    name: dog.name,
                    height: dog.height.metric,
                    weight: dog.weight.metric,
                    life: dog.life_span,
                    origin: dog.origin,
                    bred_for: dog.bred_for,
                    image: getImage(dog.reference_image_id)
                };
            });

            if (resultOfApi.length) {
                return res.send(resultOfApi);

            } else {
                if (allDogsDB) { //este es el formato que me pide la ruta de detalles
                    for (const dog of allDogsDB) {
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
        const dogsApi = allDogsAPI.data?.map((dog) => {
            return {
                id: dog.id,
                name: dog.name,
                image: dog.image.url,
                temperament: dog.temperament
            };
        });

        const dogsDB = allDogsDB?.map((dog) => {
            return ({
                id: dog.id,
                name: dog.name,
                image: dog.image,
                temperaments: dog.temperaments.map((temp) => temp.name).join(', ')
            });
        });

        res.send([...dogsDB, ...dogsApi]);
    }
};