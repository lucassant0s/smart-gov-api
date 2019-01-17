'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn('Secretaries', 'responsible_body',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    );
    queryInterface.addColumn('Secretaries', 'responsible_manager',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    );
    return queryInterface.addColumn('Secretaries', 'prefecture_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        referencies: {
          model: 'Prefectures',
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
