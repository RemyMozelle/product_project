import express from "express";
import bodyParser from "body-parser";
import categories from "./routes/categories";
import products from "./routes/products";
import createSequelize from "./database/db";
import modelCategory from "./models/Categories";
import modelProduct from "./models/Products";

const sequelize = createSequelize();
const Category = sequelize.import("categories", modelCategory);
const Products = sequelize.import("products", modelProduct);

// RELATIONSHIP
Category.belongsTo(Category);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

products(app, Products);
categories(app, Category);
app.listen(3001);
