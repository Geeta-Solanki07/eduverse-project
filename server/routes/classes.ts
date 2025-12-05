import express, { Request, Response } from "express";
import ClassModel from "../models/Class";

const router = express.Router();

/**
 * Create new class
 * POST /api/classes
 * Body: { title, slug, description?, image? }
 */
router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, slug, description, image } = req.body;

    if (!title || !slug) {
      return res.status(400).json({ message: "Missing required fields: title and slug" });
    }

    // Prevent duplicate slug
    const exists = await ClassModel.findOne({ slug });
    if (exists) {
      return res.status(409).json({ message: "Slug already exists" });
    }

    const newClass = new ClassModel({ title, slug, description, image });
    const saved = await newClass.save();
    return res.status(201).json(saved);
  } catch (error: any) {
    console.error("POST /api/classes error:", error);
    return res.status(500).json({ message: error.message || "Server error" });
  }
});

/**
 * Get all classes
 * GET /api/classes
 */
router.get("/", async (_req: Request, res: Response) => {
  try {
    const classes = await ClassModel.find().sort({ createdAt: -1 });
    return res.json(classes);
  } catch (error: any) {
    console.error("GET /api/classes error:", error);
    return res.status(500).json({ message: error.message || "Server error" });
  }
});

/**
 * Get single class by slug
 * GET /api/classes/:slug
 */
router.get("/:slug", async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const found = await ClassModel.findOne({ slug });

    if (!found) {
      return res.status(404).json({ message: "Class not found" });
    }

    return res.json(found);
  } catch (error: any) {
    console.error(`GET /api/classes/${req.params.slug} error:`, error);
    return res.status(500).json({ message: error.message || "Server error" });
  }
});

export default router;
