const modelComment = (sequelize, DataTypes) =>
  sequelize.define("comments", {
    date: {
      type: DataTypes.DATE
    },
    message: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    }
  });

export default modelComment;
