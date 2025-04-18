/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Items", [
      {
        name: "Говядина Шейная часть лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item1.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Голяшка (нарезка) лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item2.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Огузок лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item3.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина духовая лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item4.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина мякоть бедра лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item5.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Гуляш лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item6.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Шейная часть н/к лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item7.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Лопаточная часть н/к лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item8.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Голяшка н/к лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item9.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Грудинка н/к лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item10.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина ребро н/к ( рагу суповое) лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item11.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина спинопоясничная часть н/к лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item12.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Антрекот охл. лоток",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 14 суток 
        Хранить при температуре от 0 до +4 и относительной влажности 85%. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item13.jpeg",
        category_id: 1,
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
    await queryInterface.bulkDelete("Items", null, {});
  },
};
