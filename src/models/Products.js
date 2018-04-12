const ModelProducts = (sequelize, DataTypes) =>
  sequelize.define(
    "products",
    {
      name: { type: DataTypes.STRING },
      price: { type: DataTypes.INTEGER }
    },
    { freezeTableName: true }
  );

export default ModelProducts;
