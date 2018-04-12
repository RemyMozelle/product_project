const modelUser = (sequelize, DataTypes) =>
  sequelize.define("users", {
    phone: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    }
  });

export default modelUser;
