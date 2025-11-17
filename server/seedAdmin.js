// seedAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI not set in .env");

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✔ MongoDB connected...");

    const existingAdmin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (existingAdmin) {
      console.log("ℹ️ Admin already exists. Deleting and recreating...");
      await User.deleteOne({ email: process.env.ADMIN_EMAIL });
    }

    const admin = new User({
      name: process.env.ADMIN_NAME || "Admin",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD, // will be hashed automatically by schema
      role: "admin",
    });

    await admin.save();
    console.log(`✅ Admin user created: ${admin.email} / ${process.env.ADMIN_PASSWORD}`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding admin:", err);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedAdmin();
