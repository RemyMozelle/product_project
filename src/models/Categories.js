const modelCategory = (sequelize, DataTypes) =>
  sequelize.define(
    "categories",
    {
      categoryId: {
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },

      isActive: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

export default modelCategory;
