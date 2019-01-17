'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rules = sequelize.define('Rules', {
    name: DataTypes.STRING
  }, {});
  Rules.associate = function(models) {
    // associations can be defined here
  };
  return Rules;
};
