const React = require("react");

const Layout = require("./Layout");

module.exports = function Contacts({ categories }) {
  const metaTags = {
    title: 'Контакты [ ООО "ПАН компани" ]',
    description:
      "Информация о 🌎метонахождении, 📬способах связи и 🕑режиме работы компании",
    robots: "index, follow",
  };
  return (
    <Layout categories={categories} metatags={metaTags}>
      <link rel="stylesheet" href="/css/contacts.css" />
      <link rel="canonical" href="https://premiumbeef.ru/contacts" />
      <div className="container contacts_container">
        <div className="contacts">
          <h2 className="titleCotn"> Контакты </h2>
          <p>
            <strong> ЮРИДИЧЕСКИЙ И ПОЧТОВЫЙ АДРЕС: </strong>
            <br />
            121596, Город Москва, вн.тер. г. Муниципальный Округ Можайский, ул
            Горбунова, дом 2, строение 3, помещение 246
          </p>
          <p>
            <strong> Часы приема заказов: </strong> ежедневно 10:00-22:00
          </p>

          <p>
            <strong> Отдел продаж: </strong>
          </p>
          <ul className="ul_contacts">
            <li className="li_contacts"> +7 (985) 472 33 76 </li>
          </ul>

          <p>
            <strong> Для писем: </strong>
          </p>
          <ul className="ul_contacts">
            <li className="li_contacts"> il19abc@gmail.com </li>
          </ul>
        </div>

        <div className="map_container">
          <div id="map" className="map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=39.711247%2C54.959259&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNjUzODI5ODI0EqwB0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0LPQvtGA0L7QtNGB0LrQvtC5INC-0LrRgNGD0LMg0JvRg9GF0L7QstC40YbRiywg0YHQtdC70L4g0J3QuNC20L3QtS3QnNCw0YHQu9C-0LLQviwg0JzQvtC70L7QtNGR0LbQvdCw0Y8g0YPQu9C40YbQsCwgMTHQkCIKDWZ5HUIVVVVbQg%2C%2C&z=8.97"
              frameBorder="1"
              allowFullScreen="true"
              title="YandexMap"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
