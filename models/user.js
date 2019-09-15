"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Note, {
      foreignKey: "user_id",
      onDelete: "CASCADE"
    });
  };
  return User;
};
