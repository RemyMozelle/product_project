import { Router } from "express";
import createSequelize from "./../database/db";
import modelCategory from "./../models/Categories";

const sequelize = createSequelize();
const route = Router();
const Category = sequelize.import("categories", modelCategory);
Category.belongsTo(Category);

// AFFICHER TOUTES LES CATEGORIES
route.get("/display_all", (req, res) => {
  Category.findAll().then(category => {
    res.json({ category });
  });
});
// AFFICHER LES CATEGORIES ACTIVER
route.get("/display", (req, res) => {
  Category.findAll({ where: { isActive: 0 } }).then(category => {
    res.json({ category });
  });
});
// AFFICHER LES CATEGORIES DESACTIVER
route.get("/disabled", (req, res) => {
  Category.findAll({ where: { isActive: 0 } }).then(category => {
    res.json({ category });
  });
});
// CREER UNE CATEGORIE
route.get("/create", (req, res) => {
  const category = {
    name: req.body.name,
    categoryId: req.body.category,
    isActive: req.body.active
  };
  Category.create({ category }).then(response => {
    res.json({ validation: `Categorie bien ajouté ${response}` });
  });
});

export default route;
