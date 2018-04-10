import express from "express";
import createSequelize from "./database/db";
import modelProduct from "./models/Products";

const sequelize = createSequelize();
const Products = sequelize.import("products", modelProduct);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello BIG");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(3001);
