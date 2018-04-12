module.exports = (app, Users) => {
  app.get("/users", (req, res) => {
    Users.findAll().then(users => res.json(users));
  });

  app.post("/users", (req, res) => {
    const users = {
      phone: req.body.phone,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };
    Users.create(users).then(created => res.json(created));
  });
};
