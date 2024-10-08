/* eslint-disable camelcase */
const React = require("react");
const Layout = require("./Layout");

module.exports = function Items({ categories, email, items, category_id }) {
  const categoryObj = categories.filter((e) => e.id === Number(category_id))[0];
  const categoryId = categoryObj ? categoryObj.id : -1;
  const pageTitle =
    categoryId && categoryObj
      ? `${categoryObj.title} [ Premium Beef ]`
      : "Каталог продукции [ Premium Beef ]";
  let descriptionStr = items.map((el) => `✅${el.name}`);
  if (categoryId === -1) {
    descriptionStr = descriptionStr.sort(() => Math.random() - 0.5);
  }
  descriptionStr = descriptionStr.join(", ");

  while (descriptionStr.length > 150) {
    const lastInd = descriptionStr.lastIndexOf(", ");
    descriptionStr = `${descriptionStr.slice(0, lastInd)} ...`;
  }

  const metaTags = {
    title: pageTitle,
    description: descriptionStr,
    robots: "index, follow",
  };
  return (
    <Layout
      categories={categories}
      email={email}
      metatags={metaTags}
      route="items"
    >
      <link rel="stylesheet" href="/css/catalog.css" />
      <link rel="stylesheet" href="/css/home.css" />
      <script defer src="/js/item.js" />
      <link
        rel="canonical"
        href={
          Number(category_id) >= 0
            ? `https://soleniya.online/catalog/${category_id}`
            : "https://soleniya.online/catalog/items"
        }
      />
      <div className="container item-container">
        <div className="allItems-container container">
          {email && (
            <a href="/accountPanel" className="btn btn-card">
              Добавить новый товар
            </a>
          )}
        </div>

        <div className="containerCategory">
          {items.length ? (
            items.map((item) => (
              <div className="card" key={`${item.id}-item`}>
                <div id={`card-hidden-${item.id}`} className="card-hidden">
                  <img
                    id={`card-img-top-${item.id}`}
                    src={item.image}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 id={`card-title-${item.id}`} className="card-title">
                      {item.name}
                    </h5>
                    <div className="card-text" id={`card-text-${item.id}`}>
                      {item.description.split("\n").map((line, index) => (
                        <p key={`${item.id}line${index}`}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="card-btn">
                    {email ? (
                      <>
                        <button
                          type="submit"
                          className="btn editBtn btn-card"
                          data-edit-item={item.id}
                          id="btnAdmin"
                        >
                          изменить
                        </button>
                        <button
                          type="submit"
                          className="btn deleteBtn btn-card"
                          data-delete-item={item.id}
                          id="btnAdmin"
                        >
                          удалить
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-card itemPriceRequest"
                      >
                        заказать
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <div
                    className="hide_container_form"
                    style={{ display: "none" }}
                    id={`hide-form-${item.id}`}
                  >
                    <p style={{ color: "red" }} className="alert_items" />
                    <form
                      id={`editItem-${item.id}`}
                      encType="multipart/form-data"
                      name="newItem"
                      className="form_catalog"
                    >
                      <label htmlFor="categoryName">Категория:</label>
                      <select name="categoryName" className="form-control">
                        {categories.length ? (
                          categories.map((category) => (
                            <option
                              key={`cat-${category.id}`}
                              value={category.title}
                              selected={category.id === item.category_id}
                              onChange={() => {}}
                            >
                              {category.title}
                            </option>
                          ))
                        ) : (
                          <option value="" disabled onChange={() => {}}>
                            No categories available
                          </option>
                        )}
                      </select>
                      <br />
                      <label htmlFor="pic_input">Фото:</label>
                      <input
                        id="pic_input"
                        type="file"
                        name="photoItem"
                        className="form-control"
                      />
                      <br />
                      <label htmlFor="pic_input">Название:</label>
                      <br />
                      <input
                        id="titleItem"
                        type="text"
                        name="name"
                        value={item.name}
                        className="form-control"
                        onChange={() => {}}
                      />
                      <br />
                      <label htmlFor="pic_input">Описание товара:</label>
                      <textarea
                        id="titleCategory"
                        type="text"
                        name="description"
                        value={item.description}
                        className="form-control"
                        rows="8"
                        onChange={() => {}}
                      />
                      <br />
                      <button
                        type="button"
                        className="btn sendEditItem endCategory"
                        data-send-edit-item={item.id}
                        id="btnSend"
                      >
                        Отправить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>товаров нет</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
