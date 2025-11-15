import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

// CORS FIXED FOR YOUR NEXT.JS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://eduverse-project.vercel.app"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

// DB + SERVER
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("✔ MongoDB Connected");
  app.listen(5000, () => console.log("✔ Server running at 5000"));
});
