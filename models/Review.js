import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  id_user: { type: Number, required: true },
  id_book: { type: Number, required: true },
  username: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export const Review = mongoose.model("Review", reviewSchema);
