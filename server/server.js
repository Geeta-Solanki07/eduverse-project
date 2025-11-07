import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

dotenv.config();
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Allowed origins (for local + deployed frontend)
const allowedOrigins = [
  "http://localhost:3000",
  "https://eduverse-project.vercel.app",
];

// ✅ CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ✅ Preflight requests (important for Render)
app.options("*", cors());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Eduverse API running 🚀");
});

// ✅ Catch invalid routes
app.use((req, res) => {
  console.log("❌ Route not found:", req.originalUrl);
  res.status(404).json({ message: "Route not found" });
});

// ✅ MongoDB Connection + Server Start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// ✅ Graceful shutdown for Render
process.on("SIGTERM", () => {
  console.log("🛑 SIGTERM received. Closing server...");
  process.exit(0);
});
