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
        description: "Lovely",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+Lovely+as+You+-+Wanderer's+Trove.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+Lovely+as+You+BIG-+Wanderer's+Trove.jpeg"
      },
      {
        albumId: 4,
        userId: 4,
        title: 'Body Bounce',
        description: "Hopeful, Laid Back",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Body+Bounce+-+Ballpoint.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Body+Bounce+BIG+-+Ballpoint.jpeg'
      },
      {
        albumId: 5,
        userId: 5,
        title: 'Champagne Toast',
        description: "Happy, Laid Back",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Champagne+Toast+-+Nbhd+Nick.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Champagne+Toast+BIG+-+Nbhd+Nick.jpeg'
      },
      {
        albumId: 1,
        userId: 1,
        title: 'Cold Blooded',
        description: "Hopeful, Busy & Frantic",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_cold+blooded+-+dasloe.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_cold+blooded+BIG-+dasloe.jpeg'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Crazy like That',
        description: "Dreamy, Laid Back",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Crazy+like+That+-+Lofive.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Crazy+like+That+BIG-+Lofive.jpeg'
      },
      {
        albumId: 3,
        userId: 3,
        title: 'Eu Quero Ver o Oceano',
        description: "Smooth, Glamorous",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Eu+Quero+Ver+o+Oceano+BIG-+John+Runefelt.jpeg',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Eu+Quero+Ver+o+Oceano+BIG-+John+Runefelt.jpeg'
      },
      {
        albumId: 4,
        userId: 4,
        title: 'For What Is Right',
        description: "Epic, Dreamy",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_For+What+Is+Right+-+Trevor+Kowalski.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_For+What+Is+Right+BIG+-+Trevor+Kowalski.jpeg'
      },
      {
        albumId: 5,
        userId: 5,
        title: 'Future Is Now',
        description: "Epic, Hopeful",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Future+Is+Now+-+FLYIN.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Future+Is+Now+BIG-+FLYIN.jpeg'
      },
      {
        albumId: 1,
        userId: 1,
        title: 'Get Out of My Way',
        description: "Happy, Hopeful",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Get+Out+of+My+Way+-+Tape+Machines.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Get+Out+of+My+Way+BIG+-+Tape+Machines.jpeg'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Havana',
        description: "Happy, Restless",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Havana+-+BLUE+STEEL.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Havana+BIG-+BLUE+STEEL.jpeg'
      },
      {
        albumId: 3,
        userId: 3,
        title: 'Higher Self',
        description: "Hopeful, Laid Back",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Higher+Self+-+Xavy+Rusan.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Higher+Self+BIG-+Xavy+Rusan.jpeg'
      },
      {
        albumId: 4,
        userId: 4,
        title: "I've Found My Way",
        description: "Happy, Hopeful",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_I've+Found+My+Way+-+Hallman.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_I've+Found+My+Way+BIG-+Hallman.jpeg"
      },
      {
        albumId: 5,
        userId: 5,
        title: 'Sole Splende',
        description: "Happy, Laid Back",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Il+Sole+Splende+-+Sum+Wave.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Il+Sole+Splende+BIG+-+Sum+Wave.jpeg'
      },
      {
        albumId: 1,
        userId: 1,
        title: 'Intimacy',
        description: "Hopeful, Laid Back",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Intimacy+-+Alex+Kehm.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Intimacy+BIG-+Alex+Kehm.jpeg'
      },
      {
        albumId: 2,
        userId: 2,
        title: 'Island In The Sky',
        description: "Happy, Dreamy",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Island+in+the+Sky+-+Giants'+Nest.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Island+in+the+Sky+BIG-+Giants'+Nest.jpeg"
      },
      {
        albumId: 2,
        userId: 3,
        title: 'Like the Ocean',
        description: "Hopeful, Dreamy",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Like+the+Ocean+-+The+Big+Let+Down.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Like+the+Ocean+BIG-+The+Big+Let+Down.jpeg'
      },
      {
        albumId: 2,
        userId: 4,
        title: 'Maharajah',
        description: "Happy Glamorous",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Maharajah+-+Ava+Low.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Maharajah+BIG-+Ava+Low.jpeg'
      },
      {
        albumId: 2,
        userId: 5,
        title: "Maybe We'll Meet Again",
        description: "Hopeful, Laid Back",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Maybe+We'll+Meet+Again+-+baegel.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Maybe+We'll+Meet+Again+BIG-+baegel.jpeg"
      },
      {
        albumId: 2,
        userId: 1,
        title: 'Not Blue',
        description: "Hopeful, Sentimental",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Not+Blue+-+Kylie+Dailey.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Not+blue+BIG-+Kylie+Dailey.jpeg'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Songs', {
      id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] }
    }, {});
  }
};
