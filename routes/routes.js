const Comment = require("../models/comment");

module.exports = (app) => {
  app.get("/work-effort/:workId/comments", (req, res) => {
    Comment.find({ work_effort_id: req.params.workId })
      .then((comments) => res.json({ res: comments }))
      .catch((err) => res.status(400).json({ error: err }));
  });

  app.post("/work-effort/:workId/comments", (req, res) => {
    const { comment } = req.body;
    const { workId } = req.params;
    const { id } = req.user;

    const newComment = new Comment({
      comment,
      work_effort_id: workId,
      user_id: id
    });

    newComment
      .save()
      .then(() => res.json({ message: "Comment added" }))
      .catch((err) => res.status(400).json({ error: err }));
  });

  app.delete("/work-effort/:workId/comments/:commentId", (req, res) => {
    const { commentId } = req.params;
    Comment.findByIdAndDelete(commentId)
      .then(() => res.json({ message: "Comment deleted" }))
      .catch((err) => res.status(400).json({ error: err }));
  });
};
