import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();
const MONGO = process.env.MONGO_URI;

if (!MONGO) {
  console.error("Set MONGO_URI in .env");
  process.exit(1);
}

const createAdmin = async () => {
  await mongoose.connect(MONGO);
  const existing = await User.findOne({ email: "admin@eduverse.com" });
  if (existing) {
    console.log("Admin exists:", existing.email);
    process.exit(0);
  }
  const hashed = await bcrypt.hash("Admin@123", 10);
  const admin = await User.create({ name: "Super Admin", email: "admin@eduverse.com", password: hashed, role: "admin" });
  console.log("Created admin:", admin.email);
  process.exit(0);
};

createAdmin().catch(err => { console.error(err); process.exit(1); });
