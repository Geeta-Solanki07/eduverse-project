// server/server.ts
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/authRoutes";
import adminRoutes from "./routes/adminRoutes";
import academicRoutes from "./routes/academicRoutes";
import itCourseRoutes from "./routes/itCourses";
import userRoutes from "./routes/userRoutes";
import settingsRoutes from "./routes/settingsRoutes";
import analyticsRoutes from "./routes/analyticsRoutes";
import featuresRoutes from "./routes/featuresRoutes";


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL || "http://localhost:3000",
      "https://eduverse-project.vercel.app",
    ],
    credentials: true,
  })
);

// Test Route
app.get("/", (req: Request, res: Response) => {
  res.send("Eduverse Backend is Running ✔");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/academics", academicRoutes);
app.use("/api/it-courses", itCourseRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin/settings", settingsRoutes);
app.use("/api/admin/analytics", analyticsRoutes);
app.use("/api/features", featuresRoutes);


// Mongo + Server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("✔ MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`✔ Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err: any) => {
    console.error("❌ MongoDB Error:", err);
  });
