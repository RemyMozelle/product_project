const modelCartItem = (sequelize, DataTypes) =>
  sequelize.define("cartsItem", {
    cartId: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  });

export default modelCartItem;
