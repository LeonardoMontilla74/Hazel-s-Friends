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
      unique: true
    },
    height_min: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height_max: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight_min: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight_max: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING
    },
    bred_for: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false
  });
};
/*  Las propiedades marcadas con asterísco deben ser obligatorias
ID * => id
Image => image.url
Nombre * => name
Altura * => height.metric
Peso * => weight.metric
Años de vida =>  life_span
origen => origin
ideal para => bred_for
*/