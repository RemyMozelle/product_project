const modelCart = (sequelize, DataTypes) =>
  sequelize.define("carts", {
    userId: {
      type: DataTypes.INTEGER
    }
  });

export default modelCart;
