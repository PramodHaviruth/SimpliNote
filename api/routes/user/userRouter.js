const express = require("express");
const router = express.Router({ mergeParams: true });

const userController = require("../../controllers/userController");
const authMiddleware = require("../../middleware/authMiddleware");

// POST: /api/v1/user/login
router.post("/login", (req, res, next) => {
  console.log("Login api");
  userController
    .login(req.body)
    .then(result => {
      console.log(result);
      req.session.user = result;
      res.json(result);
    })
    .catch(next);
});

// GET: /api/v1/user/logout
router.get(
  "/logout",
  authMiddleware.authenticateUser(),
  (req, res, next) => {}
);

module.exports = router;
