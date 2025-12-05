import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import adminRoutes from "./routes/adminRoutes";

import authRoutes from "./routes/authRoutes";
import courseRoutes from "./routes/courseRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import subcategoryRoutes from "./routes/subcategoryRoutes";
import academicRoutes from "./routes/academicRoutes";
import syllabusRoute from "./routes/syllabus";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS FIX for Next.js + Cookies
app.use(
  cors({
    origin: ["http://localhost:3000", "https://eduverse-project.vercel.app"],
    credentials: true,
  })
);

// Test Route
app.get("/", (req: Request, res: Response) => {
  res.send("Eduverse Backend is Running ✔");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subcategoryRoutes);
app.use("/api/academics", academicRoutes);
app.use("/api/syllabus", syllabusRoute);
app.use("/api/admin", adminRoutes);




// PORT
const PORT = process.env.PORT || 5000;

// MongoDB + Server Start
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("✔ MongoDB Connected");
    app.listen(PORT, () => console.log(`✔ Server running at ${PORT}`));
  })
  .catch((err: any) => {
    console.error("❌ MongoDB Error:", err);
  });
