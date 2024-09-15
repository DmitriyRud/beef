"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        title: "Телятина",
        image: "/image/categories/teletina.jpg",
        description:
          "Настоящее лакомство для гурманов! Ее нежное мясо тает во рту, оставляя после себя незабываемое послевкусие. Идеальный выбор для тех, кто ценит высокое качество и изысканный вкус.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Говядина",
        image: "/image/categories/govyadina.png",
        description:
          "Ценный источник белка, железа и других важных для организма микроэлементов. Наша говядина выращена в экологически чистых условиях и обладает высокими питательными свойствами.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Стейки",
        image: "/image/categories/steak.jpg",
        description:
          "Стейки – это мир вкусов и текстур. От классического Рибая до экзотического Томагавка – у нас вы найдете стейк на любой случай.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
