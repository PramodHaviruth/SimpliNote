const router = require("express").Router();

router.use("/user", require("./user/userRouter"));

module.exports = router;
