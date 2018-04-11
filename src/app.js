/* eslint-disable no-console */
/* eslint-disable camelcase */

import express from "express";
import createSequelize from "./database/db";
import ModelProducts from "./models/Products";
import ModelCategories from "./models/Categories";
import products from "./routes/products";
// import categories from "./routes/categories";

const app = express();
const sequelize = createSequelize();
const Product = sequelize.import("products", ModelProducts);
const Category = sequelize.import("categories", ModelCategories);

// RELATIONSHIP
Category.hasMany(Product, { foreignKey: "categories_id" });

products(app, Product);
// categories(app, Category);

app.listen(3001);
/* app.use("/", index);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const createProduct = (name, price, categories_id) => {
  Product.sync().then(() =>
    Product.create({
      name,
      price,
      categories_id
    })
  );
};

const createCategory = (name, isActive, categoryId) => {
  Category.sync().then(() => {
    Category.create({
      name,
      isActive,
      categoryId
    });
  });
};

// createCategory("Catégorie Collier", 0, 1);
// createProduct("Collier en dimant", 100000, 1); */
