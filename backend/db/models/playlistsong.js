'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaylistSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlaylistSong.init({
    playlistId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Playlists',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Songs',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'PlaylistSong',
  });
  return PlaylistSong;
};
