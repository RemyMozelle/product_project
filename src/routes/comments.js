module.exports = (app, Comments) => {
  // SHOW ALL COMMENTS PER PRODUCT
  app.get("/products/:products_id/comments", (req, res) => {
    Comments.findAll({
      where: {
        productId: req.params.products_id
      }
    }).then(comment => res.json({ comment }));
  });
  // CREATE A COMMENT FOR A PRODUCT
  app.post("/comments", (req, res) => {
    const comments = {
      date: req.body.date,
      message: req.body.message,
      productId: req.body.products_id,
      userId: req.body.users_id
    };
    Comments.create(comments).then(created => res.json({ created }));
  });
  // UPDATE A COMMENT
  app.put("/comments/:id", (req, res) => {
    const comments = {
      date: req.body.date,
      message: req.body.message
    };
    Comments.update(comments, {
      where: {
        id: req.params.id
      }
    }).then(updated => res.json({ updated }));
  });
  // DELETE ONE COMMENT
  app.delete("/comments/:id", (req, res) => {
    Comments.destroy({
      where: {
        id: req.params.id
      }
    }).then(deleted => res.json({ deleted }));
  });
  // DELETE ALL COMMENTS FOR 1 USER
  app.delete("/users/:id/comments", (req, res) => {
    Comments.destroy({
      where: {
        userId: req.params.id
      }
    }).then(deleteCommentForThisUser => res.json({ deleteCommentForThisUser }));
  });
};
