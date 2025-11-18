import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import adminStats from "./routes/adminStats.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

// CORS FIXED FOR NEXT.JS + RENDER
app.use(
  cors({
    origin: ["http://localhost:3000", "https://eduverse-project.vercel.app"],
    credentials: true,
  })
);

// TEST ROUTE (to avoid Cannot GET /)
app.get("/", (req, res) => {
  res.send("Eduverse Backend is Running ✔");
});

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminStats);

// SET PORT FOR RENDER & LOCAL
const PORT = process.env.PORT || 5000;

// DB + SERVER START
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✔ MongoDB Connected");
    app.listen(PORT, () => console.log(`✔ Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });
