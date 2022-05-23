'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'Lition',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        previewImage: 'USER1.COM'
      },
      {
        email: 'user1@user.io',
        firstName: 'Fake',
        lastName: 'User',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        previewImage: 'USER2.COM'
      },
      {
        email: 'user2@user.io',
        firstName: 'Fake',
        lastName: 'User2',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        previewImage: 'USER3.COM'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
