'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Songs', [
      {
        albumId: 1,
        userId: 1,
        title: 'Wonderful World',
        description: "It's a wonderful world",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Hip-hop Song',
        description: "Nice rap song",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 3,
        userId: 3,
        title: 'Pop Song',
        description: "Cute pop song",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Songs', {
      title: { [Op.in]: ['Wonderful World', 'Hip-hop Song', 'Pop Song'] }
    }, {});
  }
};
