import express from "express";
import index from "./routes/index";
import createSequelize from "./database/db";
import ModelProducts from "./models/Products";

const sequelize = createSequelize();
const app = express();
const Product = sequelize.import("PRODUCT", ModelProducts);

app.use("/", index);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

Product.sync().then(() =>
  Product.create({
    name: "bobi",
    price: 2222222
  })
);
app.listen(3001);
