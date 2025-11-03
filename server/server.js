import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ CORS setup (VERY IMPORTANT)
app.use(
  cors({
    origin: ["http://localhost:3000", "https://eduverse-project.vercel.app"],
    credentials: true,
  })
);

// ✅ Test route
app.get("/", (req, res) => res.send("Eduverse API running ✅"));

// ✅ Routes
app.use("/auth", authRoutes);

// ✅ PORT and DB connection
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`✅ Server running on ${PORT}`)))
  .catch((err) => console.log("❌ DB error:", err.message));
