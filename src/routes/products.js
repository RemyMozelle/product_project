/* eslint-disable camelcase */

module.exports = (app, Products) => {
  app.post("/products/create", (req, res) => {
    Products.sync().then(() =>
      Products.create({
        name: req.body.name,
        price: req.body.price,
        categories_id: req.body.categories_id
      }).then(response => {
        res.json("GG `${response}`");
      })
    );
  });

  /* app.post("/products/create", req => {
    const product = {
      name: req.body.name,
      price: req.body.price,
      categories_id: req.body.categories_id
    };
    Products.sync().then(() => {
      Products.create({
        product
      });
    });
  }); */

  app.get("/products/list", (req, res) => {
    Products.findAll().then(product => {
      res.json({ product });
    });
  });
};
