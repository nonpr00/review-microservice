import { Review } from "../models/Review.js";
// GET reviews by book
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
    const { id_user, username, id_book, content, rating } = req.body; // Extraer solo los campos relevantes del body
    const newReview = new Review({ id_user, username, id_book, content, rating });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update review
export const updateReview = async (req, res) => {
  try {
    const { content, rating } = req.body; // Solo permitimos actualizar content y rating, la fecha se maneja automáticamente o no se actualiza aquí
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { content, rating }, // Solo pasamos los campos a actualizar
      { new: true }
    );
    if (!updatedReview) return res.status(404).json({ error: "Review not found" });
    res.json(updatedReview);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE review
export const deleteReview = async (req, res) => {
  try {
    const result = await Review.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Review not found" });
    res.json({ message: "Review eliminada con éxito" }); // Mensaje de éxito más descriptivo
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
