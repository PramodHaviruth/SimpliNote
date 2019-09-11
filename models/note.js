"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      ispublic: DataTypes.INTEGER
    },
    {}
  );
  Note.associate = function(models) {
    // associations can be defined here
    Note.hasMany(models.Image, {
      foreignKey: "note_id",
      onDelete: "CASCADE"
    });
  };
  return Note;
};
