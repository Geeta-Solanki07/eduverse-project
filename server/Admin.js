// Run: node seedAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  const existing = await User.findOne({ email: "admin@dousoft.com" });
  if (existing) {
    console.log("Admin already exists");
    process.exit(0);
  }
  const hash = await bcrypt.hash("Admin@1234", 10);
  const admin = await User.create({ name: "Admin", email: "admin@dousoft.com", password: hash, role: "admin" });
  console.log("Created admin:", admin.email);
  process.exit(0);
}
run().catch(err => console.error(err));
