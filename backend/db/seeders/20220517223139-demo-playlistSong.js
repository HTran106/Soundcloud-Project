'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PlaylistSongs', [
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

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('PlaylistSongs', {
      playListId: { [Op.in]: [1, 2, 3]}
    }, {})
  }
};
