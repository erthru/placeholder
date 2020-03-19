'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        name: 'Anonymous One',
        email: 'anony1@eaxmple.com',
        body: 'Example of comment one',
        postId: 1
      },
      {
        name: 'Anonymous Two',
        email: 'anony2@eaxmple.com',
        body: 'Example of comment two',
        postId: 1
      },
      {
        name: 'Anonymous Three',
        email: 'anony3@eaxmple.com',
        body: 'Example of comment three',
        postId: 1
      },
      {
        name: 'Anonymous Four',
        email: 'anony4@eaxmple.com',
        body: 'Example of comment four',
        postId: 1
      },
      {
        name: 'Anonymous Five',
        email: 'anony5@eaxmple.com',
        body: 'Example of comment five',
        postId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
