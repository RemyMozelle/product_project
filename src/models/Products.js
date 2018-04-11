// import modelCategory from "./Category";

const ModelProducts = (sequelize, DataTypes) =>
  sequelize.define(
    "PRODUCT",
    {
      name: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true }
  );

/* modelProduct.hasOne(modelCategory, { foreignKey: "CATEGORYid" }); */

export default ModelProducts;
