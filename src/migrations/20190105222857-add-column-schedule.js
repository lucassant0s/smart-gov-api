'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   queryInterface.addColumn('Economies', 'sensor_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        referencies: {
          model: 'Sensors',
          key: 'id'
        }
      }
    );
    return queryInterface.addColumn('Economies', 'schedule', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true
    })
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
