import express from "express";
import { SupportMessage } from "../models/SupportMessage.js";

const router = express.Router();

// POST /api/support — save contact/support message
router.post("/", async (req, res) => {
  try {
    const { name, email, category, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields required." });
    }

    const newMsg = await SupportMessage.create({ name, email, category, message });
    res.status(201).json({
      success: true,
      message: "Message received successfully!",
      data: newMsg,
    });
  } catch (err) {
    console.error("Support message error:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

// GET /api/support — view all messages (admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await SupportMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
