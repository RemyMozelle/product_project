/* eslint-disable camelcase */

module.exports = (app, Products) => {
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
};
