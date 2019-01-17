'use strict';
module.exports = (sequelize, DataTypes) => {
  const Edifices = sequelize.define('Edifices', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    secretary_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Secretaries',
        key: 'id'
      }
    }
  }, {});
  Edifices.associate = function(models) {
    // associations can be defined here
  };
  return Edifices;
};
