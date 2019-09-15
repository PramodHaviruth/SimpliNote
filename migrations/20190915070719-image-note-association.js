"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Images", // name of Source model
      "note_id", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Notes", // name of Target model
          key: "id" // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Images", // name of Source model
      "note_id" // key we want to remove
    );
  }
};
