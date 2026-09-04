import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(
    cors({
    origin: process.env.CLIENT_URL
    })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
    res.json({
    success: true,
    message: "SageScan backend is running"
    });
});

app.use("/api/reviews", reviewRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`SageScan backend running on port ${PORT}`);
});