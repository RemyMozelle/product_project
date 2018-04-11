import express from "express";
import bodyParser from "body-parser";
// MODELS
import createSequelize from "./database/db";
import modelCategory from "./models/Categories";
import modelProduct from "./models/Products";
import modelComment from "./models/Comment";
// ROUTES
import categories from "./routes/categories";
import products from "./routes/products";
import comments from './routes/comments';
// SEQUELIZE
const sequelize = createSequelize();
// IMPORT MODELS
const Category = sequelize.import("categories", modelCategory);
const Products = sequelize.import("products", modelProduct);
const Comments = sequelize.import("comments", modelComment); 
// RELATIONSHIP
Category.belongsTo(Category);
Comments.hasMany(Products);

const app = express();

app.use(bodyParser.json());

products(app, Products);
categories(app, Category);
comments(app, Comments);

app.listen(3001);
