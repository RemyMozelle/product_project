module.exports = (app, Products, sequelize, Categories) => {
  /**
   * Display all products
   * Sort products by descending price
   * Sort products by ascending price
   */
  app.get("/products", (req, res) => {
    if (!req.query.sort) {
      Products.findAll().then(product => {
        res.json({ product });
      });
    } else if (req.query.sort === "-price") {
      Products.findAll({
        order: [["price", "DESC"]]
      }).then(product => {
        res.json({ product });
      });
    } else if (req.query.sort === "price") {
      Products.findAll({
        order: sequelize.col("price")
      }).then(product => {
        res.json({ product });
      });
    }
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

  /**
   * Display all products from a particular category
   */
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
};
