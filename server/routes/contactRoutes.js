import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newMessage = new Contact({ name, email, phone, message });
    await newMessage.save();
    res.json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// GET all contact messages (Admin)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
