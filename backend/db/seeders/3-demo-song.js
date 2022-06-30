'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Songs', [
      {
        albumId: 1,
        userId: 1,
        title: "Til All That's Left is Ash",
        description: "Country",
        url: "s3://soundcloud-files-hdt/ES_'Til All That's Left Is Ash - Ludlow.jpeg",
        previewImage: "s3://soundcloud-files-hdt/ES_'Til All That's Left Is Ash - Ludlow.mp3"
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
      },
      {
        albumId: 2,
        userId: 1,
        title: 'Song 4',
        description: "Nice rap song",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 1,
        title: 'Song 5',
        description: "Nice rap song",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 1,
        title: 'Song 6',
        description: "Nice rap song",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Song 7',
        description: "Nice rap song",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Song 8',
        description: "Nice rap song",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Songs', {
      title: { [Op.in]: ['Wonderful World', 'Hip-hop Song', 'Pop Song', 'Song 4', 'Song 5', 'Song 6', 'Song 7', 'Song 8'] }
    }, {});
  }
};
