/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Items", [
      {
        name: "Телятина охлаждённая односортная",
        description: `Состав: Телятина
        Срок годности: 14 суток
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item1.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Телелятина замороженная односортная",
        description: `Состав: Телятина
        Срок годности: 180 суток
        Хранить при температуре -18. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item2.jpeg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина из молодого быка бескостная",
        description: `Состав: свежее охлажденное мясо быка
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item3.png",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Антрекот",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки 
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item4.jpg",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Вырезка",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item5.jpg",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Голень",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item6.jpg",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Грудинка",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item7.jpg",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Лопатка",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item8.jpg",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Оковалок",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item9.png",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Огузок",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item10.jpg",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Говядина Шея",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item11.jpg",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Стейки из молодого быка",
        description: `Состав: свежее охлажденное мясо быка
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item12.jpg",
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Стейк РИБАЙ",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item13.jpg",
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Стейк СТРИПЛОЙН",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item14.jpg",
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Стейк ТИБОН",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item15.png",
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Стейк ТАМОГАВК",
        description: `Состав: свежее охлажденное говяжье мясо
        Срок годности: 21 сутки
        Хранить при температуре от 0 до +4. Срок годности после вскрытия НЕ БОЛЕЕ 48 часов
        Пищевая ценность на 100г.: белки 18,6г., жиры 0г., углеводы 0г., энергетическая ценность 105ккал`,
        image: "/image/items/item16.jpg",
        category_id: 3,
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
