import Sequelize from "sequelize";

const createSequelize = () => {
  const sequelize = new Sequelize("product_project", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    port: 8889,
    define: {
      timestamps: false,
      freezeTableName: true
    },

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });
  return sequelize;
};

export default createSequelize;
