import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import reviewRoutes from "./routes/reviews.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/reviews", reviewRoutes);

export default app;
