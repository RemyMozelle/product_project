const modelComment = (sequelize, DataTypes) =>
  sequelize.define("comments", {
    date: {
      type: DataTypes.DATE
    },
    message: {
      type: DataTypes.INTEGER
    },
    products_id: {
      type: DataTypes.INTEGER
    },
    users_id: {
      type: DataTypes.INTEGER
    }
  });

export default modelComment;