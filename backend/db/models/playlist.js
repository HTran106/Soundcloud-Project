'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const playlistsSongMap = {
        foreignKey: 'playlistId',
        otherKey: 'songId',
        through: 'PlaylistSong'
      }
      Playlist.belongsToMany(models.Song, playlistsSongMap)
      Playlist.belongsTo(models.User, { foreignKey: 'userId' })

    }
  }
  Playlist.init({
    userId: {
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    previewImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};
