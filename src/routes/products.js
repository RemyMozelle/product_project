module.exports = (app, Product) => {
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
};
