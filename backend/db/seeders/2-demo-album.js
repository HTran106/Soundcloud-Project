'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Happy',
        description: 'Compilation of all songs that make you happy.',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album15.jpeg'
      },
      {
        userId: 1,
        title: 'Hopeful',
        description: 'Compilation of all songs that make you hopeful.',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album2.jpeg'
      },
      {
        userId: 1,
        title: 'Epic',
        description: 'Compilation of the most epic songs.',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album3.jpeg'
      },
      {
        userId: 1,
        title: 'Dreamy',
        description: 'Dreamy music for people that likes to dream.',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album4.jpeg'
      },
      {
        userId: 1,
        title: 'Laid Back',
        description: 'Songs that make you feel relaxed and laid back.',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album5.jpeg'
      },
      {
        userId: 1,
        title: 'Peaceful',
        description: 'Most peaceful songs on Earth.',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album6.jpeg'
      },
      {
        userId: 1,
        title: 'Lovely',
        description: 'Music made with love.',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album7.jpeg'
      },
      {
        userId: 2,
        title: 'Glamorous',
        description: 'This album will make you feel like the Kardashians',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album8.jpeg'
      },
      {
        userId: 3,
        title: 'Smooth',
        description: 'Smooth like butter.',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album9.jpeg'
      },
      {
        userId: 5,
        title: 'Sentimental',
        description: 'Sentimental music for everyone.',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/album10.jpeg'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Albums', {
      id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    })
  }
};
