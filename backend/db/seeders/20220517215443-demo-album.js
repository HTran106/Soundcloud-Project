'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Wonderland',
        description: 'Wonderful world album',
        previewImage: 'www.albumPreviewImageTEST.com'
      },
      {
        userId: 2,
        title: 'Hip-hop Album',
        description: 'Top 10 Hip-hop Songs',
        previewImage: 'www.albumPreviewImageTEST.com'
      },
      {
        userId: 3,
        title: 'Pop Album',
        description: 'Best Pop music',
        previewImage: 'www.albumPreviewImageTEST.com'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Albums', {
      title: { [Op.in]: ['Wonderland', 'Hip-hop Album', 'Pop Album']}
    })
  }
};
