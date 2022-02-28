const { Dog, Temperament } = require('../db');

module.exports = async function postDog(req, res) {
    const { name, height, weight, life, origin, bred_for, image, temperaments } = req.body;
    if (name && height && weight) {
        try {
            const dogCreate = await Dog.create({
                name,
                height,
                weight,
                life,
                origin,
                bred_for,
                image,
            });

            dogCreate.addTemperament(temperaments); // relaciono el perro creado con los temperamentos que recibo por body

            res.status(201).send('Creación exitosa');

        } catch (error) {
            console.log(error);
        }
    } else res.send('Se necesitan los datos minimos para la creación');
};