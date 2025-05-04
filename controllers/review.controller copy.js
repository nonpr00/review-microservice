/*
import { Review } from "../models/review";

export const getBookReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ id_book: Number(req.params.bookId) }).sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET reviews by user
export const getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ id_user: Number(req.params.userId) }).sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new review
export const addReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const saved = await newReview.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update review
export const updateReview = async (req, res) => {
  try {
    const { content, rating, date } = req.body;
    //const { texto, calificacion, fecha } = req.body;
    const updated = await Review.findByIdAndUpdate(
      req.params.id,
      { content, rating, date },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Review not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE review
export const deleteReview = async (req, res) => {
  try {
    const result = await Review.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Review not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
*/