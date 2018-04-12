module.exports = (app, Cart, User) => {
  app.get("/carts/:user_id", (req, res) => {
    User.findOne({ where: { id: req.params.user_id } }).then(user => {
      Cart.findOne({ where: { user_id: user.id } }).then(cart => {
        res.json({ cart });
      });
    });
  });
};
