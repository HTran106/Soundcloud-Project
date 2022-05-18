'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        songId: 1,
        body: "What a wonderful song"
      },
      {
        userId: 2,
        songId: 2,
        body: "Awesome hip hop song"
      },
      {
        userId: 3,
        songId: 3,
        body: "This song is poppin"
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Comments', {
      userId: { [Op.in]: [1, 2, 3]}
    }, {})
  }
};
