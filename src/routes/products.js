module.exports = (app, Product, Category) => {
  app.get("/products/create", (req, res) => {
    const product = {
      name: req.body.name,
      price: req.body.price,
      categories_id: req.body.categories_id
    };
    Product.create({ product }).then(response => {
      res.json({ validation: `Produit bien ajouté ${response}` });
    });
  });
  app.get("/products/category/:alias", (req, res) => {
    Category.findOne({ where: { name: req.params.alias } }).then(category => {
      console.log(category.id);
      Product.findAll({ where: { categories_id: category.id } }).then(
        products => {
          res.json({ products, category });
        }
      );
    });
  });
  app.get("/product_by_category", (req, res) => {
    Product.findAll({ where: { categories_id: 2 } }).then(products => {
      res.json({ products });
    });
  });
  app.get("/products_display", (req, res) => {
    Product.findAll().then(products => {
      res.json({ products });
    });
  });
};
