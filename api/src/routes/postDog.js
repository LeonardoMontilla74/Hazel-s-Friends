const { Dog } = require('../db');

module.exports = async function postDog(req, res) {
    const { name, height, weight, life, origin, bred_for, image } = req.body;
    if (name && height && weight) {
        try {
            await Dog.create({
                name,
                height,
                weight,
                life,
                origin,
                bred_for,
                image,
            });
            res.status(200).send('Creación exitosa');

        } catch (error) {
            console.log(error);
        }
    } else res.send('Se necesitan los datos minimos para la creación');
};