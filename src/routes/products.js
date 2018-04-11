/* eslint-disable camelcase */
module.exports = (app, Products, sequelize) => {
  app.get("/products/list", (req, res) => {
    Products.findAll().then(product => {
      res.json({ product });
    });
  });

  app.post("/products/create", (req, res) => {
    const product = {
      name: req.body.name,
      price: req.body.price,
      categories_id: req.body.categories_id
    };
    Products.create(product).then(response => {
      res.json({ validation: `Categorie bien ajouté ${response}` });
    });
  });

  app.get("/products/list/descending", (req, res) => {
    Products.findAll({
      order: [["price", "DESC"]]
    }).then(product => {
      res.json({ product });
    });
  });

  app.get("/products/list/ascending", (req, res) => {
    Products.findAll({
      order: sequelize.col("price")
    }).then(product => {
      res.json({ product });
    });
  });
};
