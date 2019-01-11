'use strict';
import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rules',
        key: 'id'
      }
    }
  }, {});

  Users.beforeCreate((users, options) => {
    const salts = bcrypt.genSaltSync(10);
    users.password = bcrypt.hashSync(users.password, salts);
  });

  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
