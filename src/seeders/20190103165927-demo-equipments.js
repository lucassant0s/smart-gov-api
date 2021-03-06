'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Sensors', [
      {
        id: 1,
        name: 'Sensor1',
        floor: '0 Andar',
        edifice_id: 3,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Sensor2',
        floor: '0 Andar',
        edifice_id: 3,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Sensor3',
        floor: '0 Andar',
        edifice_id: 3,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Sensor4',
        floor: '0 Andar',
        edifice_id: 3,
        createdAt: new Date(), updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   queryInterface.bulkDelete('Prefectures', null, {});
   queryInterface.bulkDelete('Secretaries', null, {});
   return queryInterface.bulkDelete('Edifices', null, {});
  }
};
