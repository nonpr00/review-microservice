import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  id_libro: { type: Number, required: true },
  id_usuario: { type: Number, required: true },
  nombre_usuario: { type: String, required: true },
  texto: { type: String, required: true },
  calificacion: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
});

export const Review = mongoose.model("Review", reviewSchema);
