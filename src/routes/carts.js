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

  app.get("/carts/:id/carts-items", async (req, res) => {
    const { id } = req.params;
    const cart = await Carts.findAll({
      include: [
        {
          model: Products,
          through: CartItem
        }
      ],
      where: { id }
    });

    if (cart) {
      res.status(200).json({ cart });
    } else {
      res.status(404).json({ msg: "Cart not found" });
    }
  });
};
