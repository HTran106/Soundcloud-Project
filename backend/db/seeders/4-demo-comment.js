'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Comments';
    await queryInterface.bulkInsert(options, [
      {
        userId: 1,
        songId: 1,
        body: "What a wonderful song"
      },
      {
        userId: 2,
        songId: 2,
        body: "Awesome hip hop song"
      },
      {
        userId: 3,
        songId: 3,
        body: "This song is poppin"
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    options.tableName = 'Comments';
    await queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1, 2, 3]}
    }, {})
  }
};
