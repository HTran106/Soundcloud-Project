'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, { foreignKey: 'userId' })
      Comment.belongsTo(models.Song, { foreignKey: 'songId' })
    }
  }
  Comment.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      },
      onDelete: 'CASCADE'
    },
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Songs'
      },
      onDelete: 'CASCADE'
    },
    body: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
