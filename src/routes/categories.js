module.exports = (app, Category) => {
  // AFFICHER TOUTES LES CATEGORIES
  app.get("/categories_display_all", (req, res) => {
    Category.findAll().then(category => {
      res.json({ category });
    });
  });
  // AFFICHER LES CATEGORIES ACTIVER
  app.get("/categories_display", (req, res) => {
    Category.findAll({ where: { isActive: 1 } }).then(category => {
      res.json({ category });
    });
  });
  // AFFICHER LES CATEGORIES DESACTIVER
  app.get("/categories_disabled", (req, res) => {
    Category.findAll({ where: { isActive: 0 } }).then(category => {
      res.json({ category });
    });
  });
  // CREER UNE CATEGORIE
  app.post("/categories_create", (req, res) => {
    console.log("ICIIIIIIIIIIIIIIIII", req.body);
    const category = {
      name: req.body.name,
      categoryId: req.body.category,
      isActive: req.body.active
    };
    Category.create(category).then(response => {
      res.json({ response });
    });
  });

  app.post("/categories_create", (req, res) => {
    const category = {
      name: req.body.name,
      categoryId: req.body.category,
      isActive: req.body.active
    };
    Category.create({ category }).then(response => {
      res.json(response);
    });
  });
};
