import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();
(async ()=>{
  await mongoose.connect(process.env.MONGO_URI);
  const email = "admin@company.com";
  const exist = await User.findOne({ email });
  if (exist) {
    console.log("Admin exists");
    process.exit(0);
  }
  const admin = new User({ name: "Company Admin", email, password: "Admin@123", role: "admin" });
  await admin.save();
  console.log("Admin created:", email, "password: Admin@123");
  process.exit(0);
})();
