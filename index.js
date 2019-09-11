const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize db connection pool
require("./models");

const apiV1 = require("./api/routes/apiRoutes");

app.use("/api/v1", apiV1);

app.listen(8000, () => {
  console.log("Started Listening at port 8000....!");
});
