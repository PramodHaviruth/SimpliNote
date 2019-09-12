const Sequelize = require("sequelize");
const models = require("../../models");
const HttpError = require("../utils/http-error");

const Op = Sequelize.Op;

let notesController = {};

notesController.publicNotes = async () => {
  const note_result = await models.Note.findAll({
    attributes: ["id", "title", "description", "ispublic"],
    where: {
      isPublic: true
    },
    include: [
      {
        model: models.Image,
        attributes: ["id", "image_url"],
        where: { note_id: { [Op.col]: "note.id" } }
      }
    ]
  });
  return note_result;
};

notesController.privateNotes = async () => {
  const note_result = await models.Note.findAll({
    attributes: ["id", "title", "description", "ispublic"],
    where: {
      isPublic: false
    },
    include: [
      {
        model: models.Image,
        attributes: ["id", "image_url"],
        where: { note_id: { [Op.col]: "note.id" } }
      }
    ]
  });
  return note_result;
};

notesController.createNotes = async data => {
  console.log(data);

  if (!data.title || !data.description || !data.ispublic)
    throw new HttpError(
      "Bad Request",
      "Please enter the required details",
      400
    );

  const add_note = {
    title: data.title,
    description: data.description,
    ispublic: data.ispublic
  };
  const note_result = await models.Note.create(add_note);

  const add_image = {
    image_url: data.image_url,
    note_id: note_result.dataValues.id
  };

  const image_result = await models.Image.create(add_image);

  return note_result;
};

module.exports = notesController;
