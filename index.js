const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
  session({
    key: "user_sid",
    secret: "somerandonstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

// Initialize db connection pool
require("./models");

const apiV1 = require("./api/routes/apiRoutes");

app.use("/api/v1", apiV1);

app.listen(8000, () => {
  console.log("Started Listening at port 8000....!");
});
