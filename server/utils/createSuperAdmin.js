import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const createSuperAdmin = async () => {
  const exists = await User.findOne({ email: "admin@dousoft.com" });
  if (exists) return;

  const hashed = await bcrypt.hash("Admin@123", 10);

  await User.create({
    name: "Super Admin",
    email: "admin@dousoft.com",
    password: hashed,
    role: "admin"
  });

  console.log("✔ Super Admin Created: admin@dousoft.com / Admin@123");
};
