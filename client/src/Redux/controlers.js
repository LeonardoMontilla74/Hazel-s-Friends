export default function order(type, copy) {

    switch (type) {
        case 'ZA':
            copy.sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            return copy;

        case 'AZ':
            copy.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            return copy;

        case 'PESO_DSC':
            copy.sort((a, b) => {
                return b.weight - a.weight;
            });
            return copy;

        case 'PESO_ASC':
            copy.sort((a, b) => {
                return a.weight - b.weight;
            });
            return copy;

        case 'ALTURA_DSC':
            copy.sort((a, b) => {
                return b.height - a.height;
            });
            return copy;

        case 'ALTURA_ASC':
            copy.sort((a, b) => {
                return a.height - b.height;
            });
            return copy;

        default:
            return copy;
    }
}