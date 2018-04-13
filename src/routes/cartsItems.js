module.exports = (app, CartsItems, Carts, Products) => {
  app.get("/cartsItems", (req, res) => {
    Carts.findAll({
      include: [
        {
          model: CartsItems,
          include: [
            {
              model: Products
            }
          ]
        }
      ]
    }).then(products => {
      res.json({ products });
    });
  });
};
