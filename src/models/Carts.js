const modelCategory = (sequelize, DataTypes) =>
  sequelize.define("carts", {
    userId: {
      type: DataTypes.INTEGER
    }
  });

export default modelCategory;
