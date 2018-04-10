import express from "express";
import index from "./routes/index";
import createSequelize from "./database/db";

const sequelize = createSequelize();
const app = express();

app.use("/", index);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(3001);
