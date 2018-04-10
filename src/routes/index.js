import { Router } from "express";
import createSequelize from "./../database/db";
import modelCategory from "./../models/Categories";

const sequelize = createSequelize();
const route = Router();
const Category = sequelize.import("categories", modelCategory);
Category.belongsTo(Category);

route.get("/", (req, res) => {
  Category.findAll({ raw: true }).then(category => {
    res.json({ category });
  });
});

export default route;
