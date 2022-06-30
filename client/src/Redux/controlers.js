import crazy from '../Styles/Images/crazy.png';

function order(type, dogList) {

    switch (type) {
        case 'ZA':
            dogList.sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            return dogList;

        case 'AZ':
            dogList.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            return dogList;

        case 'PESO_DSC':
            dogList.sort((a, b) => {
                return b.weight_max - a.weight_max;
            });
            return dogList;

        case 'PESO_ASC':
            dogList.sort((a, b) => {
                return a.weight_max - b.weight_max;
            });
            return dogList;

        case 'ALTURA_DSC':
            dogList.sort((a, b) => {
                return b.height_max - a.height_max;
            });
            return dogList;

        case 'ALTURA_ASC':
            dogList.sort((a, b) => {
                return a.height_max - b.height_max;
            });
            return dogList;

        default:
            return dogList;
    }
}

function filter(type, dogList) {
    let result = [];

    switch (type) {
        case 'DB':
            let dogDB = dogList.filter((dog) => dog.id.length > 4);
            dogDB.length
                ? result = dogDB
                : result.push(
                    {
                        id: 404,
                        name: 'Aún no has creado un perro',
                        image: crazy,
                        temperaments: 'Parece un buen momento para crear uno'
                    });
            return result;

        case 'API':
            result = dogList.filter((dog) => dog.id.length === undefined);
            return result;

        default:
            const dogNull = dogList.filter((dog) => {
                return dog.id !== 196 && dog.id !== 197 && dog.id !== 211 && dog.id !== 261;
            });
            const dogMatch = dogNull.filter((dog) => dog.temperaments.includes(type));
            return dogMatch;
    }
}

export { order, filter };