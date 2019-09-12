const express = require("express");
const router = express.Router({ mergeParams: true });

const notesController = require("../../controllers/notesController");
const userController = require("../../controllers/userController");

// POST: /api/v1/notes/addnotes
router.post("/addnotes", (req, res, next) => {
  console.log("create notes");
  notesController
    .createNotes(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

// GET: /api/v1/notes/publicnotes
router.get("/publicnotes", (req, res, next) => {
  notesController
    .publicNotes()
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

// GET: /api/v1/notes/privatenotes
router.get("/privatenotes", (req, res, next) => {
  notesController
    .privateNotes()
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

module.exports = router;
