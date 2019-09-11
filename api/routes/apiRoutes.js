const router = require("express").Router();

router.use("/user", require("./user/userRouter"));
router.use("/notes", require("./notes/notesRouter"));

module.exports = router;
