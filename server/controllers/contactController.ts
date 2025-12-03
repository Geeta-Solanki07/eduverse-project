import { Request, Response } from "express";
import Contact from "../models/Contact";

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    await Contact.create({ name, email, message });
    res.json({ success: true, message: "Received" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
