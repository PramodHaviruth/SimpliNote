"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Notes", [
      {
        title: "Note 31",
        description: "This is the note desc",
        ispublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Note 32",
        description: "This is the note desc",
        ispublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Note 33",
        description: "This is the note desc",
        ispublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  }
};
