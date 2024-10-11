const React = require("react");
const Layout = require("./Layout");

module.exports = function Home({ categories }) {
  const metaTags = {
    title: "Свежее качественное мясо [🥩 без накачки и добавок]",
    description:
      "Производство и снабжение свежим качественным мясом 🥫магазинов, 🍱ресторанов, 🌭кафе, 🛌гостиниц, 🥣столовых, 🍹баров, 🧁комбинатов питания",
    robots: "index, follow",
  };
  return (
    <Layout categories={categories} metatags={metaTags} route="home">
      <script defer src="/js/requestPriceHome.js" />
      <link rel="canonical" href="https://premiumbeef.ru/" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
      />
      <link rel="stylesheet" href="/css/home.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
        rel="stylesheet"
      />
      <div>
        <div className="swiper container">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1">
              <div className="slide1-text">
                <div className="slide1-title">
                  <div className="logo_header">
                    <h2>Premium Beef</h2>
                  </div>
                  <div className="image_text_container">
                    <p> Магазин свежего мяса </p>
                  </div>
                </div>
              </div>
              <div className="image-slider">
                <img
                  src="/image/slider/slider-1.jpg"
                  alt="Premium beef image"
                />
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="slide2-container">
                <div className="slide2-item">Вкусно</div>
                <div className="slide2-item">Выгодно</div>
                <div className="slide2-item">Удобно</div>
              </div>
              <div className="image-slider">
                <img
                  src="/image/slider/slider-2.jpg"
                  alt="Premium beef image 2"
                />
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="slide2-container">
                <div className="slide2-item">100% качество</div>
                <div className="slide2-item">от производителя</div>
              </div>
              <div className="image-slider">
                <img
                  src="/image/slider/slider-3.jpg"
                  alt="Premium beef image 3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home-title">
            <h2 className="home-title-text">
              Доставка стейков, мяса и мясных продуктов для Вашего ресторана,
              кафе или любого другого предприятия по оптовым ценам
            </h2>
            <div className="home-title-description">
              ООО "ПАН компани" осуществляет снабжение мясом и мясопродуктами
              ресторанов, кафе, гостиниц, столовых, баров, комбинатов питания по
              Москве и Московской области. Также мы поставляем продукцию в
              магазины и торговые сети.
            </div>
          </div>
          <div className="home-price">
            <div className="price-form">
              <h3 className="price-form-title">Узнайте подробности</h3>
              <div className="price-form-description formOnHome">
                Заполните форму и мы свяжемся с Вами, чтобы предоставить всю
                необходимую информацию
                <p className="price_form_alert_home" />
              </div>
              <form className="formRequestPriceHome" method="POST">
                <div className="mb-3">
                  <input
                    className="form-price__input form-control"
                    aria-describedby="name"
                    name="name"
                    placeholder="Введите Ваше имя"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-price__input form-control"
                    name="phone"
                    placeholder="Введите Ваш номер телефона"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-price__input form-control"
                    name="email"
                    placeholder="Введите Ваш email"
                  />
                </div>
                <button className="price-btn btn" type="submit">
                  Отправить
                </button>
                <p className="message" />
              </form>
            </div>
          </div>
          <div className="advantages">
            <div className="advantages-inner">
              <div className="advantages-item">
                <div className="advantages-img">
                  <img src="/image/assortiment.png" alt="assortment" />
                </div>
                <h5 className="advantages-title">Обширный ассортимент</h5>
                <div className="advantaged-descr">
                  Богатый выбор мяса на любой вкус.
                </div>
                <a href="/catalog" className="advantages-btn btn">
                  КАТАЛОГ
                </a>
              </div>
              <div className="advantages-item">
                <div className="advantages-img">
                  <img src="/image/delivery.png" alt="delievery" />
                </div>
                <h5 className="advantages-title">УДОБНАЯ ДОСТАВКА</h5>
                <div className="advantaged-descr">
                  Доставка по Москве и области - в кратчайшие сроки по приятным
                  ценам.
                </div>
                <a href="/delivery" className="advantages-btn btn">
                  ДОСТАВКА
                </a>
              </div>
              <div className="advantages-item">
                <div className="advantages-img">
                  <img src="/image/trust.png" alt="partners" />
                </div>
                <h5 className="advantages-title">Нам доверяют</h5>
                <div className="advantaged-descr">
                  Посмотрите отзывы реальных клиентов
                </div>
                <a href="/feedback" className="advantages-btn btn">
                  ОТЗЫВЫ
                </a>
              </div>
            </div>
          </div>
          <div id="map" className="map"></div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" />
      <script defer src="/js/home.js" />
    </Layout>
  );
};
