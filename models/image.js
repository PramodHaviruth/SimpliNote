"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      image_url: DataTypes.STRING
    },
    {}
  );
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Note, {
      foreignKey: "note_id",
      onDelete: "CASCADE"
    });
  };
  return Image;
};
