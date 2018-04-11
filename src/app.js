/* eslint-disable no-console */
/* eslint-disable camelcase */
import bodyParser from "body-parser";
import express from "express";
import createSequelize from "./database/db";
import ModelProducts from "./models/Products";
import ModelCategories from "./models/Categories";
import products from "./routes/products";

const app = express();
app.use(bodyParser.json({ extended: false }));
const sequelize = createSequelize();
const Product = sequelize.import("products", ModelProducts);
const Category = sequelize.import("categories", ModelCategories);

// RELATIONSHIP
Category.hasMany(Product, { foreignKey: "categories_id" });

products(app, Product, sequelize);
app.listen(3001);
