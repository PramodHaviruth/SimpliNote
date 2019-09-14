const models = require("../../models");
const HttpError = require("../utils/http-error");

let userController = {};

userController.login = async data => {
  console.log(data);

  if (!data.email || !data.password)
    throw new HttpError(
      "Bad Request",
      "Please enter the required details",
      400
    );

  const user_result = await models.User.findAll({
    where: {
      email: data.email,
      password: data.password
    }
  });

  if (!user_result.length)
    throw new HttpError("Bad Request", "invalid credentials.", 400);

  var login_result;
  if (user_result[0].dataValues.id) {
    const login_update_result = await models.User.update(
      {
        active: true
      },
      {
        where: {
          id: user_result[0].dataValues.id
        }
      }
    );

    if (login_update_result) login_result = user_result[0].dataValues.id;
    console.log(login_result);
  } else {
    login_result = -999;
  }

  return login_result;
};

userController.authenticate = async data => {
  console.log(data);

  if (!data.email)
    throw new HttpError(
      "Bad Request",
      "Please enter the required details",
      400
    );

  const user_result = await models.User.findAll({
    where: {
      email: data.email,
      active: true
    }
  });

  if (!user_result.length)
    throw new HttpError("Bad Request", "Unauthorized.", 400);

  console.log(user_result[0].dataValues.id);

  return user_result[0].dataValues.id;
};

module.exports = userController;
