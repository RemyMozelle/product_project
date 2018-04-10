const modelCategory = (sequelize, DataTypes) =>
  sequelize.define("categorys", {
    totalPrice: {
      type: DataTypes.INTEGER
    },

    nbProducts: {
      type: DataTypes.INTEGER
    }
  });

export default modelCategory;
