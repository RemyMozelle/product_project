// import modelCategory from "./Category";

const modelProduct = (sequelize, DataTypes) =>
  sequelize.define("products", {
    name: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    }
  });

// modelProduct.hasOne(modelCategory, { foreignKey: "CATEGORYid" });

export default modelProduct;
