"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Images", [
      {
        image_url:
          "https://m.media-amazon.com/images/M/MV5BODMxMTEyZmQtODU1OC00Y2I5LWI3NmMtOGFiZTcxNTVmOTQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR2,0,140,209_AL_.jpg",
        note_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url:
          "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg",
        note_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image_url:
          "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        note_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  }
};
