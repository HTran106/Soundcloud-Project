'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'PlaylistSongs';
    await queryInterface.bulkInsert(options, [
      {
        playlistId: 1,
        songId: 1
      },
      {
        playlistId: 2,
        songId: 2
      },
      {
        playlistId: 3,
        songId: 3
      }

    ], {})
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op
    options.tableName = 'PlaylistSongs';
    await queryInterface.bulkDelete(options, {
      playlistId: { [Op.in]: [1, 2, 3] }
    }, {})
  }
};
