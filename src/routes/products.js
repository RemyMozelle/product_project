import { Router } from "express";
import createSequelize from "./../database/db";
import modelProduct from "./../models/Products";

const sequelize = createSequelize();
const route = Router();
const Products = sequelize.import("products", modelProduct);

module.exports = route;
