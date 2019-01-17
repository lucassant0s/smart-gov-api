'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn('Sensors', 'floor',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    );
    queryInterface.addColumn('Sensors', 'active',
      {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }
    );
    return queryInterface.addColumn('Sensors', 'edifice_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        referencies: {
          model: 'Edifices',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
