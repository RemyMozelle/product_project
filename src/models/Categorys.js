const modelCategory = (sequelize, DataTypes) =>
  sequelize.define("categorys", {
    name: {
      type: DataTypes.STRING
    },

    description: {
      type: DataTypes.TEXT
    },

    isActive: {
      type: DataTypes.BOOLEAN
    }
  });

export default modelCategory;
