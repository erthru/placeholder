'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    thumbnail: DataTypes.TEXT,
    authorId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.Author);
    Post.hasMany(models.Comment);
  };
  return Post;
};