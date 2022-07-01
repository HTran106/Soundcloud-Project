'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Songs', [
      {
        albumId: 1,
        userId: 1,
        title: "Til All That's Left is Ash",
        description: "Hopeful, Laid Back",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_'Til+All+That's+Left+Is+Ash+-+Ludlow.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_'Til+All+That's+Left+Is+Ash+BIG+-+Ludlow.jpeg"
      },
      {
        albumId: 2,
        userId: 2,
        title: 'As a Gift',
        description: "Dreamy, Peaceful",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+a+Gift+-+Francis+Wells.mp3",
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+a+Gift+BIG-+Francis+Wells.jpeg'
      },
      {
        albumId: 3,
        userId: 3,
        title: 'As Lovely as You',
        description: "Cute pop song",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+Lovely+as+You+-+Wanderer's+Trove.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+Lovely+as+You+BIG-+Wanderer's+Trove.jpeg"
      },
      {
        albumId: 2,
        userId: 1,
        title: 'Body Bounce',
        description: "Hopeful, Laid Back",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Body+Bounce+-+Ballpoint.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Body+Bounce+BIG+-+Ballpoint.jpeg'
      },
      {
        albumId: 2,
        userId: 1,
        title: 'Champagne Toast',
        description: "Happy, Laid Back",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 1,
        title: 'Cold Blooded',
        description: "Hopeful, Busy & Frantic",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Crazy like That',
        description: "Dreamy, Laid Back",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Eu Quero Ver o Oceano',
        description: "Smooth, Glamorous",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'For What Is Right',
        description: "Epic, Dreamy",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Future Is Now',
        description: "Epic, Hopeful",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Get Out of My Way',
        description: "Happy, Hopeful",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Havana',
        description: "Happy, Restless",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Higher Self',
        description: "Hopeful, Laid Back",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: "I've Found My Way",
        description: "Happy, Hopeful",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Sole Splende',
        description: "Happy, Laid Back",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Intimacy',
        description: "Hopeful, Laid Back",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Island In The Sky',
        description: "Happy, Dreamy",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Like the Ocean',
        description: "Hopeful, Dreamy",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Maharajah',
        description: "Happy Glamorous",
        url: 'www.songURLtesting.com',
        previewImage: 'www.songIMGtesting.com'
      },
      {
        albumId: 2,
        userId: 2,
        title: "Maybe We'll Meet Again",
        description: "Hopeful, Laid Back",
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
      {
        albumId: 2,
        userId: 2,
        title: 'Song 8',
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
      {
        albumId: 2,
        userId: 2,
        title: 'Song 8',
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
      {
        albumId: 2,
        userId: 2,
        title: 'Song 8',
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
