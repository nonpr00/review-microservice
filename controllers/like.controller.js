import { Like } from "../models/Like.js"; // Asegúrate de que la ruta sea correcta

// CREATE: Añadir un nuevo like
export const addLike = async (req, res) => {
  try {
    const { id_review, id_user } = req.body;
    const newLike = new Like({ id_review, id_user });
    const saved = await newLike.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ: Obtener todos los likes
export const getLikes = async (req, res) => {
  try {
    const likes = await Like.find();
    res.json(likes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Obtener un like por su ID de Mongoose (_id)
export const getLikeById = async (req, res) => {
  try {
    const like = await Like.findById(req.params.id);
    if (like == null) {
      return res.status(404).json({ error: "Like no encontrado" });
    }
    res.json(like);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Obtener likes por ID de reseña
export const getLikesByReview = async (req, res) => {
  try {
    const likes = await Like.find({ id_review: Number(req.params.reviewId) }).sort({ date: -1 });
    res.json({likes, number: likes.length});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Obtener likes por ID de usuario
export const getLikesByUser = async (req, res) => {
  try {
    const likes = await Like.find({ id_user: Number(req.params.userId) }).sort({ date: -1 });
    res.json(likes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateLike = async (req, res) => {
  try {
    const updatedLike = await Like.findByIdAndUpdate(
      req.params.id,
      req.body, // Puedes enviar los campos a actualizar en el cuerpo
      { new: true }
    );
    if (!updatedLike) {
      return res.status(404).json({ error: "Like no encontrado" });
    }
    res.json(updatedLike);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE: Eliminar un like por su ID de Mongoose
export const deleteLike = async (req, res) => {
  try {
    const result = await Like.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Like no encontrado" });
    }
    res.json({ message: "Like eliminado con éxito" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
