/* eslint-disable no-console */
/* eslint-disable camelcase */
import bodyParser from "body-parser";
import express from "express";
import categories from "./routes/categories";
import products from "./routes/products";
import createSequelize from "./database/db";
import modelCategory from "./models/Categories";
import modelProduct from "./models/Products";
import modelCart from "./models/Carts";
import modelUser from "./models/Users";
import carts from "./routes/carts";

const app = express();
app.use(bodyParser.json({ extended: false }));
const sequelize = createSequelize();
const Category = sequelize.import("categories", modelCategory);
const Product = sequelize.import("products", modelProduct);
const Cart = sequelize.import("carts", modelCart);
const User = sequelize.import("users", modelUser);

// RELATIONSHIP
Category.hasMany(Product, { foreignKey: "categories_id" });
Category.hasMany(Category, { foreignKey: "categoryId" });

products(app, Product, Category);
categories(app, Category);
carts(app, Cart, User);
app.listen(3001);
