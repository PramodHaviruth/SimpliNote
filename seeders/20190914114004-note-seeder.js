"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Notes", [
      {
        title: "Note 2",
        description: "This is the note desc",
        ispublic: true,
        user_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Note 3",
        description: "This is the note desc",
        ispublic: false,
        user_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Note 4",
        description: "This is the note desc",
        ispublic: false,
        user_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  }
};
