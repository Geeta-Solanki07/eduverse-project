import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

const CLIENT = process.env.CLIENT_URL || "http://localhost:3000";
app.use(cors({ origin: [CLIENT], credentials: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

// Health
app.get("/", (req, res) => res.send("Eduverse API running 🚀"));

// 404 logger (helps debug)
app.use((req, res) => {
  console.log("Route not found:", req.originalUrl);
  res.status(404).json({ message: "Route not found" });
});

// DB + Start
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
  })
  .catch((e) => console.error("MongoDB connection error:", e.message));
