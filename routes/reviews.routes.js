import express from "express";
import {
  getBookReviews,
  getUserReviews,
  addReview,
  updateReview,
  deleteReview
} from "../controllers/review.controller.js";

const router = express.Router();

router.get("/book/:bookId", getBookReviews);
router.get("/user/:userId", getUserReviews);
router.post("/", addReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;
