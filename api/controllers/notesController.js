const models = require("../../models");

let notesController = {};

notesController.publicNotes = async () => {
  const note_result = await models.Note.findAll({
    where: {
      isPublic: 0
    }
  });
  return note_result;
};

notesController.privateNotes = async () => {
  const note_result = await models.Note.findAll({
    where: {
      isPublic: 1
    }
  });
  return note_result;
};

notesController.createNotes = async data => {
  console.log(data);
  const add_note = {
    title: data.title,
    description: data.description,
    ispublic: data.ispublic
  };
  const note_result = await models.Note.create(add_note);
  console.log(note_result);
  return note_result;
};

module.exports = notesController;
