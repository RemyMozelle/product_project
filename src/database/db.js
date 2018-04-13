import Sequelize from "sequelize";

const createSequelize = (DATABASE, USERNAME, PASSWORD, HOST) => {
  console.log(DATABASE, USERNAME, PASSWORD, HOST);
  const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: "mysql",
    operatorsAliases: false,
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
