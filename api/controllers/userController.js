const models = require("../lib/db/models");

let userController = {};

userController.login = data => {
  console.log(data);
  return new Promise((resolve, reject) => {
    const note_result = models.User.findAll({
      where: {
        email: data.email
      }
    });
    console.log(note_result);
    resolve(note_result);
  });
};

module.exports = userController;
