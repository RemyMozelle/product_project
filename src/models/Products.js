const modelProduct = (sequelize, DataTypes) =>
  sequelize.define("products", {
    name: {
      type: DataTypes.STRING
    },

    description: {
      type: DataTypes.TEXT
    }
  });

export default modelProduct;
