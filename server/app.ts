import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Routes
import authRoutes from "./routes/authRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import subRoutes from "./routes/subcategoryRoutes";
// import courseRoutes from "./routes/courseRoutes";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://eduverse-project.vercel.app",
    ],
    credentials: true,
  })
);

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Eduverse Backend is running!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subRoutes);
// app.use("/api/courses", courseRoutes);

export default app;
