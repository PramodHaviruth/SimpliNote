const models = require("../lib/db/models");

let notesController = {};

notesController.publicNotes = () => {
  return new Promise((resolve, reject) => {
    const note_result = models.Note.findAll({});
    resolve(note_result);
  });
};

notesController.privateNotes = () => {
  return new Promise((resolve, reject) => {
    const note_result = models.Note.findAll({});
    resolve(note_result);
  });
};

notesController.createNotes = data => {
  console.log(data);
  return new Promise((resolve, reject) => {
    const add_note = {
      title: data.title,
      description: data.description
    };
    const note_result = models.Note.create(add_note);
    console.log(note_result);
    resolve(note_result);
  });
};

module.exports = notesController;
