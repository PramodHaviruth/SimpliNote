"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      ispublic: DataTypes.BOOLEAN
    },
    {}
  );
  Note.associate = function(models) {
    // associations can be defined here
    Note.hasMany(models.Image, {
      foreignKey: "note_id",
      onDelete: "CASCADE"
    });
    Note.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: "CASCADE"
    });
  };
  return Note;
};
