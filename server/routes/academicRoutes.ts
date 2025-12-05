// src/routes/academicRoutes.ts
import { Router } from "express";
import AcademicClass from "../models/AcademicClass";

const router = Router();

/** GET all classes */
router.get("/classes", async (_req, res) => {
  try {
    const classes = await AcademicClass.find().lean();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch classes" });
  }
});

/** GET class by slug */
router.get("/classes/:slug", async (req, res) => {
  try {
    const cls = await AcademicClass.findOne({ slug: req.params.slug }).lean();
    if (!cls) return res.status(404).json({ message: "Class not found" });
    res.json(cls);
  } catch {
    res.status(500).json({ message: "Failed to fetch class" });
  }
});

/** CREATE class (admin use) */
router.post("/classes", async (req, res) => {
  try {
    const newClass = await AcademicClass.create(req.body);
    res.status(201).json(newClass);
  } catch (err: any) {
    res.status(400).json({ message: err.message || "Invalid payload" });
  }
});

export default router;
