"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@test.com",
        password: "qwerty",
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "user1@test.com",
        password: "123456",
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "user2@test.com",
        password: "654321",
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
