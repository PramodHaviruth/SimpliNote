const models = require("../../models");
const HttpError = require("../utils/http-error");

let authMiddleware = {};

authMiddleware.authenticateUser = () => {
  return async (req, res, next) => {
    console.log("Session details");
    console.log(req.cookies.user_sid);
    console.log(req.session.user);

    if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie("user_sid");
    }

    if (req.session.user && req.cookies.user_sid) {
      const check_auth_result = await models.User.findAll({
        attributes: ["id", "active"],
        where: {
          id: req.session.user,
          active: true
        }
      });

      console.log(check_auth_result[0].dataValues.id);
      console.log(check_auth_result[0].dataValues.active);

      if (check_auth_result[0].dataValues.id === req.session.user) {
        next();
      } else {
        return next(
          new HttpError("Unauthorized", "You dont have permission", 401)
        );
      }
    } else {
      return next(
        new HttpError("Unauthorized", "You dont have permission", 401)
      );
    }
  };
};

module.exports = authMiddleware;
