const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  work_effort_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "WorkEffort",
  },
  comment: { type: String, required: true },
  left_at: { type: Date, default: Date.now },
  user_id: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Comment = mongoose.model("Comment", schema);
module.exports = Comment;
