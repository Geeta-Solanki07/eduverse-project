import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// POST: /contact
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g. dousoftit@gmail.com
        pass: process.env.EMAIL_PASS, // Gmail app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject || "New Contact Message from Eduverse",
      text: `
        📩 New Contact Form Message:
        -------------------------------
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ error: "Failed to send message. Try again later." });
  }
});

export default router;
