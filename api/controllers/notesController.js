const Sequelize = require("sequelize");
const models = require("../../models");
const HttpError = require("../utils/http-error");

const Op = Sequelize.Op;

let notesController = {};

notesController.publicNotes = async userId => {
  var note_result;
  if (userId) {
    note_result = await models.Note.findAll({
      attributes: ["id", "title", "description", "ispublic", "user_id"],
      where: {
        isPublic: true,
        user_id: userId
      },
      include: [
        {
          model: models.Image,
          attributes: ["id", "image_url"],
          where: { note_id: { [Op.col]: "note.id" } }
        }
      ]
    });
  } else {
    note_result = await models.Note.findAll({
      attributes: ["id", "title", "description", "ispublic", "user_id"],
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
  }
  return note_result;
};

notesController.privateNotes = async userId => {
  const note_result = await models.Note.findAll({
    attributes: ["id", "title", "description", "ispublic", "user_id"],
    where: {
      isPublic: false,
      user_id: userId
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

notesController.createNotes = async (data, userId) => {
  console.log(data);

  if (!data.title || !data.description)
    throw new HttpError(
      "Bad Request",
      "Please enter the required details",
      400
    );

  console.log("userId ====" + userId);

  const add_note = {
    title: data.title,
    description: data.description,
    ispublic: data.ispublic,
    user_id: userId
  };
  const note_result = await models.Note.create(add_note);

  console.log(note_result);

  if (data.image_url) {
    console.log("images list " + data.image_url.length);

    if (data.image_url.length > 0) {
      data.image_url.forEach(async image => {
        console.log(image + "--------------------" + note_result.dataValues.id);
        const add_image = {
          image_url: image,
          note_id: note_result.dataValues.id
        };

        const image_result = await models.Image.create(add_image);
      });
    } else {
      const add_image = {
        image_url: null,
        note_id: note_result.dataValues.id
      };

      const image_result = await models.Image.create(add_image);
    }
  } else {
    const add_image = {
      image_url: null,
      note_id: note_result.dataValues.id
    };

    const image_result = await models.Image.create(add_image);
  }

  return note_result;
};

module.exports = notesController;
