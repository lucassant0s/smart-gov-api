'use strict';
module.exports = (sequelize, DataTypes) => {
  const Secretaries = sequelize.define('Secretaries', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    responsible_body: {
      type: DataTypes.STRING,
      allowNull: true
    },
    responsible_manager: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prefecture_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Prefectures',
        key: 'id'
      }
    }
  }, {});
  Secretaries.associate = function(models) {
    // associations can be defined here
  };
  return Secretaries;
};
