module.exports = (app, Products, sequelize, Category) => {
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
    console.log("req.body : ", req.body);
    const product = {
      name: req.body.name,
      price: req.body.price,
      categories_id: req.body.categories_id
    };
    Products.create(product).then(response => {
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
};
