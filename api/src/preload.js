const axios = require('axios');
const { Temperament } = require('./db');
const URL = 'https://api.thedogapi.com/v1/breeds';
const { API_KEY } = process.env;

module.exports = async function preLoader() {
    try {
        let temperaments = [];

        const allDogs = await axios(URL + API_KEY);
        allDogs.data?.map((dog) => {
            if (dog.temperament) { // no todos los perros tienen temperamento
                const arrayOfTemps = dog.temperament.split(', '); // => ['Stubborn', 'Curious', 'Playful', 'Adventurous', 'Active', 'Fun-loving']
                temperaments = [...temperaments, ...arrayOfTemps]; // en cada vuelta guardo lo que ya tenia y lo concateno con el nuevo dog
            }
        });

        for (let i = temperaments.length - 1; i >= 0; i--) {
            if (temperaments.indexOf(temperaments[i]) !== i) temperaments.splice(i, 1);
        }

        const crearTemp = temperaments.map((temp) => {
            return { name: temp }; // convierto el array en un objeto para pasarselo a bulkCreate  
        });
        await Temperament.bulkCreate(crearTemp);
        console.log('Temperaments preloaded');

    } catch (error) {
        console.error(error);
    }
};