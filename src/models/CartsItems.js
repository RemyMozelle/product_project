const modelCartItem = (sequelize, DataTypes) =>
  sequelize.define("carts_items", {
    cartId: {
      type: DataTypes.INTEGER,
      msg: "Must be an integer number of an existing cart id"
    },
    productId: {
      type: DataTypes.INTEGER,
      msg: "Must be an integer number of an existing product id"
    },
    quantity: {
      type: DataTypes.INTEGER,
      msg: "Must be an integer number "
    }
  });

export default modelCartItem;
