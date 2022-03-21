const { Dog, Temperament } = require('../db');

module.exports = async function postDog(req, res, next) {
    const {
        name,
        height_max,
        height_min,
        weight_max,
        weight_min,
        life,
        origin,
        bred_for,
        image,
        temperaments
    } = req.body;

    if (name && height_max && height_min && weight_max && weight_min) {
        try {
            const dogCreate = await Dog.create({
                name,
                height_min,
                height_max,
                weight_min,
                weight_max,
                life,
                origin,
                bred_for,
                image,
            });

            dogCreate.addTemperament(temperaments); // los temperaments son un array de numeros con los ids

            res.status(201).send(dogCreate);

        } catch (error) {
            console.log(error);
            next(error)

        }

    } else res.status(206).send({ error: 'Se necesitan los datos minimos para la creación' });
};