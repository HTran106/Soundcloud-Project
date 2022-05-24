'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const playlistsSongMap = {
        foreignKey: 'songId',
        otherKey: 'playlistId',
        through: 'PlaylistSong'
      }
      Song.hasMany(models.Comment, { foreignKey: 'songId' })
      Song.belongsTo(models.Album, { foreignKey: 'albumId' })
      Song.belongsTo(models.User, { foreignKey: 'userId', as: 'Artist' })
      Song.belongsToMany(models.Playlist, playlistsSongMap)
    }
  }
  Song.init({
    albumId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull:false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    previewImage: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
