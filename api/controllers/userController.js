const models = require("../../models");

let userController = {};

userController.login = async data => {
  console.log(data);
  const user_result = await models.User.findAll({
    where: {
      email: data.email
    }
  });
  console.log(user_result);
  console.log(user_result[0].dataValues.id);

  if (user_result[0].dataValues.id) {
    const login_update_result = await models.User.update(
      {
        active: 1
      },
      {
        where: {
          id: user_result[0].dataValues.id
        }
      }
    );

    console.log(login_update_result);
  }

  return user_result;
};

userController.authenticate = async data => {
  console.log(data);
  const user_result = await models.User.findAll({
    where: {
      email: data.email,
      active: 1
    }
  });
  console.log(user_result[0].dataValues.id);

  return user_result[0].dataValues.id;
};

module.exports = userController;
