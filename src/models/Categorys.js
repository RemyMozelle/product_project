const modelCategory = (sequelize, DataTypes) =>
  sequelize.define(
    "categorys",
    {
      name: DataTypes.STRING,
      type: DataTypes.TEXT,
      IsAtive: DataTypes.BOOLEAN
    },
    {
      timestamps: false
    }
  );

// modelCategory.belongsTo(modelCategory);
export default modelCategory;
