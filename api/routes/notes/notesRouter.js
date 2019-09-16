const express = require("express");
const router = express.Router({ mergeParams: true });

const notesController = require("../../controllers/notesController");
const userController = require("../../controllers/userController");

const authMiddleware = require("../../middleware/authMiddleware");

// POST: /api/v1/notes/addnotes
router.post(
  "/addnotes",
  authMiddleware.authenticateUser(),
  (req, res, next) => {
    console.log("create notes");
    notesController
      .createNotes(req.body, req.session.user)
      .then(result => {
        res.json(result);
      })
      .catch(next);
  }
);

//PUT: /api/v1/notes/updatenote/1
router.put(
  "/updatenote/:id",
  authMiddleware.authenticateUser(),
  (req, res, next) => {
    console.log("note id" + req.params.id);
    notesController
      .updateNote(req.body, req.params.id, req.session.user)
      .then(result => {
        res.json(result);
      })
      .catch(next);
  }
);

//PATCH: /api/v1/notes/updatenote/title/1
router.patch(
  "/updatenote/title/:id",
  authMiddleware.authenticateUser(),
  (req, res, next) => {
    console.log("note id" + req.params.id);
    notesController
      .updateNoteTitle(req.body, req.params.id, req.session.user)
      .then(result => {
        res.json(result);
      })
      .catch(next);
  }
);

//DELETE: /api/v1/notes/Deletenote/1
router.delete(
  "/deletenote/:id",
  authMiddleware.authenticateUser(),
  (req, res, next) => {
    console.log("note id" + req.params.id);
    console.log("note body" + req.body);
    notesController
      .deleteNote(req.params.id)
      .then(result => {
        res.json(result);
      })
      .catch(next);
  }
);

// GET: /api/v1/notes/publicnotes
router.get("/publicnotes", (req, res, next) => {
  notesController
    .publicNotes(req.session.user)
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

// GET: /api/v1/notes/privatenotes
router.get(
  "/privatenotes",
  authMiddleware.authenticateUser(),
  (req, res, next) => {
    notesController
      .privateNotes(req.session.user)
      .then(result => {
        res.json(result);
      })
      .catch(next);
  }
);

module.exports = router;
