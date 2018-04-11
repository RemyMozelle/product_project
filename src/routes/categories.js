module.exports = (app, Category) => {
  // AFFICHER TOUTES LES CATEGORIES
  app.get("/display_all", (req, res) => {
    Category.findAll().then(category => {
      res.json({ category });
    });
  });
  // AFFICHER LES CATEGORIES ACTIVER
  app.get("/display", (req, res) => {
    Category.findAll({ where: { isActive: 0 } }).then(category => {
      res.json({ category });
    });
  });
  // AFFICHER LES CATEGORIES DESACTIVER
  app.get("/disabled", (req, res) => {
    Category.findAll({ where: { isActive: 0 } }).then(category => {
      res.json({ category });
    });
  });
  // CREER UNE CATEGORIE
  app.get("/create", (req, res) => {
    const category = {
      name: req.body.name,
      categoryId: req.body.category,
      isActive: req.body.active
    };
    Category.create({ category }).then(response => {
      res.json({ validation: `Categorie bien ajouté ${response}` });
    });
  });
};
