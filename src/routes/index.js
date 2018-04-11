import { Router } from "express";
import createSequelize from "./../database/db";
import modelCategory from "./../models/Categories";

const sequelize = createSequelize();
const route = Router();
const Category = sequelize.import("categories", modelCategory);
Category.belongsTo(Category);

route.get("/display_categories", (req, res) => {
  Category.findAll().then(category => {
    res.json({ category });
  });
});

route.get("/create", (req, res) => {
  Category.create({ name: "Canard", isActive: 1, categoryId: 1 }).then(
    category => {
      res.json({ validation: `Categorie bien ajouté${category}` });
    }
  );
});
export default route;
