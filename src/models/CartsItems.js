const modelCartItem = (sequelize, DataTypes) =>
  sequelize.define("comments", {
    quantity: {
      type: DataTypes.INTEGER
    },
    cartId: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    }
  });

export default modelCartItem;
