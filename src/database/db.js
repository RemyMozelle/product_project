import Sequelize from "sequelize";

const createSequelize = () => {
  const sequelize = new Sequelize("product_project", "root", "robin", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    define: {
      timestamps: false
    },

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  return sequelize;
};

export default createSequelize;
