module.exports = (app, CartsItems, Carts, Products) => {
  // Add product to cart
  app.post("/carts-items", async (req, res) => {
    const item = {
      cartId: req.body.cartId,
      productId: req.body.productId,
      quantity: req.body.quantity
    };
    const existingCartItem = await CartsItems.find({
      where: {
        cartId: item.cartId,
        productId: item.productId
      }
    });
    if (!existingCartItem) {
      const cartItem = await CartsItems.create(item);
      res.json({ cartItem });
    } else {
      res.status(400).json({ msg: "Item already exist" });
    }
  });
  // Delete a product
  app.delete("/carts-items/:cartId/:productId", async (req, res) => {
    const { cartId, productId } = req.params;
    await CartsItems.destroy({
      where: {
        cartId,
        productId
      }
    });
    res.status(200).json({ msg: "Success" });
  });
};
