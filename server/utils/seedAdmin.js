// seedAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✔ Connected to MongoDB");

    const adminEmail = process.env.ADMIN_EMAIL || "admin@dousoft.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "Admin@123";

    const adminExists = await User.findOne({ email: adminEmail });
    if (!adminExists) {
      const hashed = await bcrypt.hash(adminPassword, 10);
      const admin = await User.create({
        name: "Super Admin",
        email: adminEmail,
        password: hashed,
        role: "admin",
      });
      console.log(`✅ Admin created: ${admin.email} / ${adminPassword}`);
    } else {
      console.log("ℹ️ Admin already exists in DB");
    }

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding admin:", err);
    await mongoose.disconnect();
    process.exit(1);
  }
};

main();
