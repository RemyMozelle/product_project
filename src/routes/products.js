/* eslint-disable camelcase */
module.exports = (app, Products, sequelize, Categories) => {
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
      categoryId: req.body.categories_id
    };
    Products.create(product).then(response => {
      res.json({ response });
    });
  });

  app.get("/category/:alias/products", (req, res) => {
    Products.findAll({
      include: [
        {
          model: Categories,
          where: {
            name: req.params.alias
          }
        }
      ]
    }).then(products => {
      res.json({ products });
    });
  });
  /**
   * Display sorted price products from a particular category by ascending
   */
  app.get("/products/sortpriceincategoryascending/:alias", (req, res) => {
    Products.findAll({
      order: sequelize.col("price"),
      include: [
        {
          model: Categories,
          where: {
            name: req.params.alias
          }
        }
      ]
    }).then(products => {
      res.json({ products });
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
   * Sort products by descending price
   */
  app.get("/products/asc", (req, res) => {
    Products.findAll({
      order: sequelize.col("price")
    }).then(product => {
      res.json({ product });
    });
  });
};

// ////// SQL REQUETE ////////
