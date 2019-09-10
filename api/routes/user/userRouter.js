const express = require("express");
const router = express.Router({ mergeParams: true });

const userController = require("../../controllers/userController");

// POST: /api/v1/user/login
router.post("/login", (req, res, next) => {
  console.log("Login api");
});

// GET: /api/v1/user/logout
router.get("/logout", (req, res, next) => {});

module.exports = router;
