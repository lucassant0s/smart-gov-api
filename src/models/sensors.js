'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sensors = sequelize.define('Sensors', {
    name: DataTypes.STRING,
    floor: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  Sensors.associate = function(models) {
    // associations can be defined here
  };
  return Sensors;
};
