module.exports = (app, Carts, Users, CartItem, Products) => {
  // Display the user cart
  app.get("/carts/:user_id", (req, res) => {
    Carts.findAll({
      include: [
        {
          model: Users,
          where: {
            id: req.params.user_id
          }
        }
      ]
    }).then(cart => {
      res.json({ cart });
    });
  });
  // Add product to cart
  app.post("/add-item/", (req, res) => {
    const item = {
      cartId: req.body.cartId,
      productId: req.body.productId,
      quantity: req.body.quantity
    };
    CartItem.create(item).then(cartItem => {
      res.json({ cartItem });
    });
  });

  app.get("/cart/item/:user_id", (req, res) => {
    Carts.findOne({
      include: [
        {
          model: Users,
          where: {
            id: req.params.user_id
          },
          include: [
            {
              model: CartItem
            },
            {
              include: [
                {
                  model: Products
                }
              ]
            }
          ]
        }
      ]
    }).then(item => {
      res.json({ item });
    });
  });
};
