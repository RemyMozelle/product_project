import bodyParser from "body-parser";
import express from "express";
import { config } from "dotenv";
import createSequelize from "./database/db";
// IMPORT MODELS
import modelCategory from "./models/Categories";
import modelProduct from "./models/Products";
import modelCart from "./models/Carts";
import modelUser from "./models/Users";
import modelComment from "./models/Comments";
import modelCartItem from "./models/CartsItems";
// ROUTES
import carts from "./routes/carts";
import products from "./routes/products";
import categories from "./routes/categories";
import comments from "./routes/comments";
import users from "./routes/users";
import cartsItems from "./routes/cartsItems";
// DOTENV
config();
// GLOBAL VARIABLES
const { USERNAME, DATABASE, HOST, PASSWORD, PORT } = process.env;
// SERVER
const app = express();
// MIDDLEWARE
app.use(bodyParser.json({ extended: false }));
// SEQUELIZE
const sequelize = createSequelize(DATABASE, USERNAME, PASSWORD, HOST, PORT);
// IMPORT MODELS
const CartsItems = sequelize.import("cartsItem", modelCartItem);
const Categories = sequelize.import("categories", modelCategory);
const Products = sequelize.import("products", modelProduct);
const Comments = sequelize.import("comments", modelComment);
const Users = sequelize.import("users", modelUser);
const Carts = sequelize.import("carts", modelCart);
// RELATIONSHIP
Categories.belongsTo(Categories);
Products.hasMany(Comments);
Products.belongsTo(Categories);
Carts.belongsTo(Users);
Carts.belongsToMany(Products, {
  through: {
    model: CartsItems,
    unique: false
  },

  foreignKey: "productId",
  constraints: false
});
Products.belongsToMany(Carts, {
  through: {
    model: CartsItems,
    unique: false
  },
  foreignKey: "cartId",
  constraints: false
});

products(app, Products, sequelize, Categories);
categories(app, Categories);
carts(app, Carts, Users, Products);
comments(app, Comments);
users(app, Users);
cartsItems(app, CartsItems, Carts, Products);

app.listen(3001);
