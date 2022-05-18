'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PlaylistSongs', [
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
    await queryInterface.bulkDelete('PlaylistSongs', {
      playlistId: { [Op.in]: [1, 2, 3]}
    }, {})
  }
};
