import bodyParser from "body-parser";
import express from "express";
import createSequelize from "./database/db";
import modelCategory from "./models/Categories";
import modelProduct from "./models/Products";
import modelCart from "./models/Carts";
import modelUser from "./models/Users";
import modelComment from "./models/Comments";

import carts from "./routes/carts";
import products from "./routes/products";
import categories from "./routes/categories";
import comments from "./routes/comments";
import users from "./routes/users";

const app = express();
app.use(bodyParser.json({ extended: false }));
const sequelize = createSequelize();
// IMPORT MODELS
const Category = sequelize.import("categories", modelCategory);
const Products = sequelize.import("products", modelProduct);
const Comments = sequelize.import("comments", modelComment);
const Users = sequelize.import("users", modelUser);
const Cart = sequelize.import("carts", modelCart);
// RELATIONSHIP
Category.belongsTo(Category);
Comments.hasMany(Products);

products(app, Products, sequelize, Category);
categories(app, Category);
carts(app, Cart, Users);
comments(app, Comments);
users(app, Users);

app.listen(3001);
