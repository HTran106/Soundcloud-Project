'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Playlists';
    await queryInterface.bulkInsert(options, [
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

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    options.tableName = 'Playlists';
    await queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1, 2, 3] }
    }, {})
  }
};
