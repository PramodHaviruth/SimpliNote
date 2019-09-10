const Sequelize = require("sequelize");

const sequelize = new Sequelize("simplifiNote", "pramod", "demo1234", {
  host: "localhost",
  port: 55555,
  dialect: "mssql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
