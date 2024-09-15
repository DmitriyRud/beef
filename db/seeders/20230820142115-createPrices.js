"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Prices", [
      {
        item_id: 1,
        kg05: 75,
        kg1: 90,
        kg3: 270,
        kg5: 400,
        kg10: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 2,
        kg05: 75,
        kg1: 90,
        kg3: 270,
        kg5: 400,
        kg10: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 3,
        kg05: 75,
        kg1: 90,
        kg3: 270,
        kg5: 400,
        kg10: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Prices", null, {});
  },
};
