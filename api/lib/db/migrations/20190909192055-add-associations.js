"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Notes", // name of Source model
      "images", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Images", // name of Target model
          key: "id" // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Notes", // name of Source model
      "images" // key we want to remove
    );
  }
};
