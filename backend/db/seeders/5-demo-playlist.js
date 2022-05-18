'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Playlists', [
      {
        userId: 1,
        name: 'Wonderland Playlist',
        previewImage: 'www.testingPlaylistPreviewImg.com'
      },
      {
        userId: 2,
        name: 'Hip-hop Playlist',
        previewImage: 'www.testingPlaylistPreviewImg.com'
      },
      {
        userId: 3,
        name: 'Pop Music Playlist',
        previewImage: 'www.testingPlaylistPreviewImg.com'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Playlists', {
      userId: { [Op.in]: [1, 2, 3]}
    }, {})
  }
};
