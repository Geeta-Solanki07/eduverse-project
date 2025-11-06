import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

router.get("/", async (req,res)=> {
  const { category } = req.query; // ?category=it or academics
  const filter = {};
  if (category) filter.category = category;
  const courses = await Course.find(filter);
  res.json(courses);
});

export default router;
