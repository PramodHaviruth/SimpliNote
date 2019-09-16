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

//An error handling middleware

app.use(function(err, req, res, next) {
  res.status(500);
  res.send("Oops, something went wrong.");
});

app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(8000, () => {
  console.log("Started Listening at port 8000....!");
});
