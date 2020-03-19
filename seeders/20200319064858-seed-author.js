'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      {
        id: 1,
        firstName: 'Michael',
        lastName: 'Dam',
        email: 'michaeldam@example.com',
        avatar: "michael_dam.jpg"
      },
      {
        id: 2,
        firstName: 'Toa',
        lastName: 'Heftiba',
        email: 'toaheftiba@example.com',
        avatar: "toa_heftiba.jpg"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
