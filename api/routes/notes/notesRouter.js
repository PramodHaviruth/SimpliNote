const express = require("express");
const router = express.Router({ mergeParams: true });

const notesController = require("../../controllers/notesController");

// POST: /api/v1/notes/addnotes
router.post("/addnotes", (req, res, next) => {
  console.log("create notes");
  notesController
    .createNotes(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET: /api/v1/notes/publicnotes
router.get("/publicnotes", (req, res, next) => {
  console.log("display list of public notes");
  notesController
    .publicNotes()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET: /api/v1/notes/privatenotes
router.get("/privatenotes", (req, res, next) => {
  notesController
    .privateNotes()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
