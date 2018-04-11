/* eslint-disable camelcase */
module.exports = (app, Products, sequelize, Category) => {
  /**
   * Display all products
   */
  app.get("/products", (req, res) => {
    Products.findAll().then(product => {
      res.json({ product });
    });
  });

  /**
   * Create a product
   */
  app.post("/products", (req, res) => {
    const product = {
      name: req.body.name,
      price: req.body.price,
      categories_id: req.body.categories_id
    };
    Products.create({ product }).then(response => {
      res.json({ validation: `Produit bien ajouté ${response}` });
    });
  });

  /**
   * Display all products from a particular category
   */
  app.get("/category/:alias/products", (req, res) => {
    Category.findOne({ where: { id: req.params.alias } }).then(category => {
      Products.findAll({ where: { categories_id: category.id } }).then(
        products => {
          res.json({ products, category });
        }
      );
    });
  });

  /**
   * Display sorted price products from a particular category by ascending
   */
  app.get("/products/sortpriceincategoryascending/:alias", (req, res) => {
    Category.findOne({ where: { id: req.params.alias } }).then(category => {
      Products.findAll({
        order: sequelize.col("price"),
        where: { categories_id: category.id }
      }).then(products => {
        res.json({ products, category });
      });
    });
  });

  /**
   * Sort products by descending price
   */
  app.get("/products/desc", (req, res) => {
    Products.findAll({
      order: [["price", "DESC"]]
    }).then(product => {
      res.json({ product });
    });
  });

  /**
   * Sort products by ascending price
   */
  app.get("/products/asc", (req, res) => {
    Products.findAll({
      order: sequelize.col("price")
    }).then(product => {
      res.json({ product });
    });
  });
};
