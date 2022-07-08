'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Songs', [
      {
        albumId: 1,
        userId: 1,
        title: "Ashes",
        description: "Quirky and humorous, yet hard hitting Hip Hop piece, with cheeky samples, big beats and cool cuts.",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_'Til+All+That's+Left+Is+Ash+-+Ludlow.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_'Til+All+That's+Left+Is+Ash+BIG+-+Ludlow.jpeg"
      },
      {
        albumId: 2,
        userId: 1,
        title: 'As a Gift',
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+a+Gift+-+Francis+Wells.mp3",
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+a+Gift+BIG-+Francis+Wells.jpeg'
      },
      {
        albumId: 3,
        userId: 1,
        title: 'As Lovely as You',
        description: "An uplifting pop-rock track with multiple guitars, drums, bass and subtle piano melodies and a very slight country feel. Inspiring / Heartening / Motivational.",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+Lovely+as+You+-+Wanderer's+Trove.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_As+Lovely+as+You+BIG-+Wanderer's+Trove.jpeg"
      },
      {
        albumId: 4,
        userId: 1,
        title: 'Body Bounce',
        description: "An uplifting pop-rock track with multiple guitars, drums, bass and subtle piano melodies and a very slight country feel. Inspiring / Heartening / Motivational.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Body+Bounce+-+Ballpoint.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Body+Bounce+BIG+-+Ballpoint.jpeg'
      },
      {
        albumId: 5,
        userId: 1,
        title: 'Champagne Toast',
        description: "Quirky and humorous, yet hard hitting Hip Hop piece, with cheeky samples, big beats and cool cuts.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Champagne+Toast+-+Nbhd+Nick.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Champagne+Toast+BIG+-+Nbhd+Nick.jpeg'
      },
      {
        albumId: 6,
        userId: 1,
        title: 'Cold Blooded',
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_cold+blooded+-+dasloe.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_cold+blooded+BIG-+dasloe.jpeg'
      },
      {
        albumId: 7,
        userId: 1,
        title: 'Crazy like That',
        description: "Quirky and humorous, yet hard hitting Hip Hop piece, with cheeky samples, big beats and cool cuts.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Crazy+like+That+-+Lofive.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Crazy+like+That+BIG-+Lofive.jpeg'
      },
      {
        albumId: 8,
        userId: 1,
        title: 'Eu Quero Ver o Oceano',
        description: "An uplifting pop-rock track with multiple guitars, drums, bass and subtle piano melodies and a very slight country feel. Inspiring / Heartening / Motivational.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Eu+Quero+Ver+o+Oceano+-+John+Runefelt.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Eu+Quero+Ver+o+Oceano+BIG-+John+Runefelt.jpeg'
      },
      {
        albumId: 9,
        userId: 1,
        title: 'For What Is Right',
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_For+What+Is+Right+-+Trevor+Kowalski.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_For+What+Is+Right+BIG+-+Trevor+Kowalski.jpeg'
      },
      {
        albumId: 10,
        userId: 1,
        title: 'Future Is Now',
        description: "Quirky and humorous, yet hard hitting Hip Hop piece, with cheeky samples, big beats and cool cuts.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Future+Is+Now+-+FLYIN.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Future+Is+Now+BIG-+FLYIN.jpeg'
      },
      {
        albumId: 1,
        userId: 2,
        title: 'Get Out of My Way',
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Get+Out+of+My+Way+-+Tape+Machines.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Get+Out+of+My+Way+BIG+-+Tape+Machines.jpeg'
      },
      {
        albumId: 2,
        userId: 4,
        title: 'Havana',
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Havana+-+BLUE+STEEL.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Havana+BIG-+BLUE+STEEL.jpeg'
      },
      {
        albumId: 3,
        userId: 5,
        title: 'Higher Self',
        description: "An uplifting pop-rock track with multiple guitars, drums, bass and subtle piano melodies and a very slight country feel. Inspiring / Heartening / Motivational.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Higher+Self+-+Xavy+Rusan.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Higher+Self+BIG-+Xavy+Rusan.jpeg'
      },
      {
        albumId: 4,
        userId: 2,
        title: "I've Found My Way",
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_I've+Found+My+Way+-+Hallman.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_I've+Found+My+Way+BIG-+Hallman.jpeg"
      },
      {
        albumId: 5,
        userId: 3,
        title: 'Sole Splende',
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Il+Sole+Splende+-+Sum+Wave.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Il+Sole+Splende+BIG+-+Sum+Wave.jpeg'
      },
      {
        albumId: 6,
        userId: 4,
        title: 'Intimacy',
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Intimacy+-+Alex+Kehm.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Intimacy+BIG-+Alex+Kehm.jpeg'
      },
      {
        albumId: 7,
        userId: 5,
        title: 'Island In The Sky',
        description: "An uplifting pop-rock track with multiple guitars, drums, bass and subtle piano melodies and a very slight country feel. Inspiring / Heartening / Motivational.",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Island+in+the+Sky+-+Giants'+Nest.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Island+in+the+Sky+BIG-+Giants'+Nest.jpeg"
      },
      {
        albumId: 8,
        userId: 2,
        title: 'Like the Ocean',
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Like+the+Ocean+-+The+Big+Let+Down.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Like+the+Ocean+BIG-+The+Big+Let+Down.jpeg'
      },
      {
        albumId: 9,
        userId: 3,
        title: 'Maharajah',
        description: "Quirky and humorous, yet hard hitting Hip Hop piece, with cheeky samples, big beats and cool cuts.",
        url: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Maharajah+-+Ava+Low.mp3',
        previewImage: 'https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Maharajah+BIG-+Ava+Low.jpeg'
      },
      {
        albumId: 10,
        userId: 4,
        title: "Meet Again",
        description: "Modern and uplifting indie soundtrack piece, with airy wordless vocals and positive strings. Builds strength and power to a rousing finish. World fusion feel.",
        url: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Maybe+We'll+Meet+Again+-+baegel.mp3",
        previewImage: "https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/ES_Maybe+We'll+Meet+Again+BIG-+baegel.jpeg"
      },
      {
        albumId: 1,
        userId: 5,
        title: 'Not Blue',
        description: "An uplifting pop-rock track with multiple guitars, drums, bass and subtle piano melodies and a very slight country feel. Inspiring / Heartening / Motivational.",
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
