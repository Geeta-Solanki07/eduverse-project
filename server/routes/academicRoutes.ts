import express from "express";
import AcademicClass from "../models/AcademicClass";

const router = express.Router();

/* ✅ GET ALL CLASSES */
router.get("/classes", async (req, res) => {
  const classes = await AcademicClass.find();
  res.json(classes);
});

/* ✅ GET SINGLE CLASS BY SLUG */
router.get("/classes/:slug", async (req, res) => {
  const cls = await AcademicClass.findOne({ slug: req.params.slug });
  if (!cls) return res.status(404).json({ message: "Class not found" });
  res.json(cls);
});

/* ✅ ADD CLASS (ADMIN) */
router.post("/classes", async (req, res) => {
  const newClass = new AcademicClass(req.body);
  await newClass.save();
  res.json(newClass);
});

export default router;
