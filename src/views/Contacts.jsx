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
    <Layout categories={categories} metatags={metaTags} route="contacts">
      <link rel="stylesheet" href="/css/contacts.css" />
      <link rel="canonical" href="https://premiumbeef.ru/contacts" />
      <div className="container contacts_container">
        <div className="contacts">
          <h2 className="titleCotn"> Контакты </h2>
          <p>
            <strong> ООО "ПАН компани" </strong>
            <br />
            <br />
            <strong> ЮРИДИЧЕСКИЙ И ПОЧТОВЫЙ АДРЕС: </strong>
            <br />
            121596, Город Москва, вн.тер. г. Муниципальный Округ Можайский, ул
            Горбунова, дом 2, строение 3, помещение 246
          </p>
          <br />
          <p>
            <strong> ФАКТИЧЕСКИЙ АДРЕС: </strong>
            <br />
            Коровинское шоссе, дом 35 строение 4
          </p>
          <br />
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
            <li className="li_contacts">
              &#112;&#097;&#110;&#046;&#099;&#111;&#109;&#050;&#048;&#049;&#048;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </li>
          </ul>
        </div>

        <div className="map_container">
          <div id="map" className="map"></div>
        </div>
      </div>
    </Layout>
  );
};
