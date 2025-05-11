import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import reviewRoutes from "./routes/reviews.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

import swaggerUi from "swagger-ui-express";
import fs from "fs";
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger-output.json', 'utf-8'));

if (!process.env.FRONTEND_URL) {
    app.use(cors({
        origin: '*',
        credentials: false,
    }));
} else {
    app.use(cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    }));
}

console.log(process.env.API_IP);

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/reviews", reviewRoutes);

export default app;
