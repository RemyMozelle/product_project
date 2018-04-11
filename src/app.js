/* eslint-disable no-console */
/* eslint-disable camelcase */

import express from "express";
import bodyParser from "body-parser";
import categories from "./routes/categories";
import products from "./routes/products";
import createSequelize from "./database/db";
import modelCategory from "./models/Categories";
import modelProduct from "./models/Products";

const sequelize = createSequelize();
const Category = sequelize.import("categories", modelCategory);
const Product = sequelize.import("products", modelProduct);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// RELATIONSHIP
Category.hasMany(Product, { foreignKey: "categories_id" });
Category.belongsTo(Category, { foreignKey: "categoryId" });

products(app, Product);
categories(app, Category);
app.listen(3001);
