module.exports = (app, Product, Category) => {
  app.get("/products/list", (req, res) => {
    Product.findAll().then(product => {
      res.json({ product });
    });
  });

  app.post("/products/create", (req, res) => {
    const product = {
      name: req.body.name,
      price: req.body.price,
      categories_id: req.body.categories_id
    };
    Product.create(product).then(response => {
      res.json({ response });
    });
  });

  app.get("/products/category/:alias", (req, res) => {
    Category.findOne({ where: { name: req.params.alias } }).then(category => {
      Product.findAll({ where: { categories_id: category.id } }).then(
        products => {
          res.json({ products, category });
        }
      );
    });
  });

  app.get("/products_display", (req, res) => {
    Product.findAll().then(products => {
      res.json({ products });
    });
  });
};

// ////// SQL REQUETE ////////
