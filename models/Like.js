import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  id_review: { type: Number, required: true },
  id_user: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export const Like = mongoose.model("Like", likeSchema);
