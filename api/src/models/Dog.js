const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    life: { //life_span en la api
      type: DataTypes.INTEGER
    },
    origin: {
      type: DataTypes.STRING
    },
    bred_for: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494__340.png'
    }
  });
};
/*  Las propiedades marcadas con asterísco deben ser obligatorias
ID * => id
Nombre * => name
Altura * => height.metric
Peso * => weight.metric
Años de vida =>  life_span
origen => origin
ideal para => bred_for
image => image.url
*/
