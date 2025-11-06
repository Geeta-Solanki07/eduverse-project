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

// ✅ Explicitly allow both origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://eduverse-project.vercel.app",
];

// ✅ CORS middleware
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ✅ Handle preflight requests (OPTIONS)
app.options("*", cors());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

// ✅ Debug: handle old route
app.use("/it-courses", (req, res) => {
  res.status(404).json({ message: "Please use /api/courses instead" });
});

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Eduverse API running 🚀");
});

// ✅ 404 handler
app.use((req, res) => {
  console.log("Route not found:", req.originalUrl);
  res.status(404).json({ message: "Route not found" });
});

// ✅ MongoDB connection
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
  })
  .catch((e) => console.error("MongoDB connection error:", e.message));
