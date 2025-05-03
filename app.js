import express from "express";
import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/reviews", reviewRoutes);

export default app;
