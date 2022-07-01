'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Happy',
        description: 'Wonderful world album',
        previewImage: 'www.albumPreviewImageTEST.com'
      },
      {
        userId: 2,
        title: 'Hopeful',
        description: 'Top 10 Hip-hop Songs',
        previewImage: 'www.albumPreviewImageTEST.com'
      },
      {
        userId: 3,
        title: 'Epic',
        description: 'Best Pop music',
        previewImage: 'www.albumPreviewImageTEST.com'
      },
      {
        userId: 1,
        title: 'Album 4',
        description: 'Best Pop music',
        previewImage: 'www.albumPreviewImageTEST.com'
      },
      {
        userId: 2,
        title: 'Album 5',
        description: 'Best Pop music',
        previewImage: 'www.albumPreviewImageTEST.com'
      },
      {
        userId: 2,
        title: 'Album 6',
        description: 'Best Pop music',
        previewImage: 'www.albumPreviewImageTEST.com'
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Albums', {
      title: { [Op.in]: ['Wonderland', 'Hip-hop Album', 'Pop Album', 'Album 4', 'Album 5', 'Album 6']}
    })
  }
};
