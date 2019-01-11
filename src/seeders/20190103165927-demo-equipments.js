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
    // queryInterface.bulkInsert('Prefectures', [{
    //   name: 'Prefeitura de Salvador',
    //   city: 'Salvador',
    //   state: 'Bahia',
    //   power_regulator: 'Coelba',
    //   createdAt: new Date(), updatedAt: new Date()
    // }], {});
    // queryInterface.bulkInsert('Secretaries', [{
    //   prefecture_id: 2,
    //   name: 'SMES',
    //   responsible_body: 'SMES',
    //   responsible_manager: 'Marcelo',
    //   createdAt: new Date(), updatedAt: new Date()
    // }], {});
    return queryInterface.bulkInsert('Sensors', [
      {
        name: 'Sensor1',
        floor: '1 Andar',
        edifice_id: 4,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Sensor2',
        floor: '1 Andar',
        edifice_id: 4,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Sensor1',
        floor: '2 Andar',
        edifice_id: 4,
        createdAt: new Date(), updatedAt: new Date()
      }
    ], {});
    // return queryInterface.bulkInsert('Edifices', [{
    //   secretary_id: 5,
    //   name: 'Escola Metodista',
    //   createdAt: new Date(), updatedAt: new Date()
    // }], {});
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
