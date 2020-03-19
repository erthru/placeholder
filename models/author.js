'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.TEXT
  }, {});
  Author.associate = function(models) {
    Author.hasMany(models.Post);
  };
  return Author;
};