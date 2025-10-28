import Contact from "../models/Contact.js";

export const saveContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const doc = await Contact.create({ name, email, phone, message });
    res.status(201).json({ success: true, data: doc });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const listContacts = async (req, res) => {
  try {
    const docs = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: docs });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
