'use strict';
module.exports = (sequelize, DataTypes) => {
  const Prefectures = sequelize.define('Prefectures', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    power_regulator: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  Prefectures.associate = function(models) {
    // associations can be defined here
  };
  return Prefectures;
};
