const express = require("express");

const app = express();

const apiV1 = require("./api/routes/apiRoutes");

app.use("/api/v1", apiV1);

app.listen(8000, () => {
  console.log("Started Listening at port 8000....!");
});
