'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    await queryInterface.bulkInsert(options, [
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
        firstName: 'Demo',
        lastName: 'Artist',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        previewImage: 'USER2.COM'
      },
      {
        email: 'user2@user.io',
        firstName: 'Charles',
        lastName: 'Xavier',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        previewImage: 'USER3.COM'
      },
      {
        email: 'user3@user.io',
        firstName: 'Robert',
        lastName: 'Stinson',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password4'),
        previewImage: 'USER4.COM'
      },
      {
        email: 'user4@user.io',
        firstName: 'Amanda',
        lastName: 'Heard',
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('password5'),
        previewImage: 'USER5.COM'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1, 2, 3, 4, 5] }
    }, {});
  }
};
