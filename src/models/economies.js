'use strict';
module.exports = (sequelize, DataTypes) => {
  const Economies = sequelize.define('Economies', {
    start: DataTypes.STRING,
    end: DataTypes.STRING,
    schedule: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  }, {});
  Economies.associate = function(models) {
    // associations can be defined here
  };
  return Economies;
};
