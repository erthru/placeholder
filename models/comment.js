'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    body: DataTypes.TEXT,
    postId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post);
  };
  return Comment;
};