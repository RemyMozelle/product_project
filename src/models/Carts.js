const modelCategory = (sequelize, DataTypes) =>
  sequelize.define("carts", {
    user_id: {
      type: DataTypes.INTEGER
    }
  });

export default modelCategory;
