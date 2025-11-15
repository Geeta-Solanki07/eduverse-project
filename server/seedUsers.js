// seedUsers.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // --- Admin user ---
    const adminEmail = process.env.ADMIN_EMAIL || "admin@dousoft.com";
    const adminExists = await User.findOne({ email: adminEmail });

    if (!adminExists) {
      const adminPassword = process.env.ADMIN_PASSWORD || "Admin@123"; // change in prod
      const hashedAdmin = await bcrypt.hash(adminPassword, 10);

      const admin = await User.create({
        name: "Super Admin",
        email: adminEmail,
        password: hashedAdmin,
        role: "admin",
      });

      console.log(`✅ Admin created: ${admin.email} / ${adminPassword}`);
    } else {
      console.log("ℹ️ Admin already exists");
    }

    // --- Default test users ---
    const testUsers = [
      { name: "Test User One", email: "user1@test.com", password: "User@123", role: "user" },
      { name: "Test User Two", email: "user2@test.com", password: "User@123", role: "user" },
      { name: "Test User Three", email: "user3@test.com", password: "User@123", role: "user" },
    ];

    for (const u of testUsers) {
      const exists = await User.findOne({ email: u.email });
      if (!exists) {
        const hashed = await bcrypt.hash(u.password, 10);
        const newUser = await User.create({
          name: u.name,
          email: u.email,
          password: hashed,
          role: u.role,
        });
        console.log(`✅ User created: ${newUser.email} / ${u.password}`);
      } else {
        console.log(`ℹ️ User already exists: ${u.email}`);
      }
    }

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding users:", err);
    await mongoose.disconnect();
    process.exit(1);
  }
};

main();
