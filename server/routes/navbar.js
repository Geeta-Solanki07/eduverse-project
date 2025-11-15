import express from "express";
import Navbar from "../models/Navbar.js";

const router = express.Router();

// GET Navbar Data
router.get("/", async (req, res) => {
  const data = await Navbar.findOne();
  res.json(data);
});

// UPDATE Navbar (Admin)
router.put("/", async (req, res) => {
  try {
    const updated = await Navbar.findOneAndUpdate({}, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Update error", error });
  }
});

export default router;
