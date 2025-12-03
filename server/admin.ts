import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User";
dotenv.config();

const run = async () => {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI not set");
  await mongoose.connect(process.env.MONGO_URI);

  const email = process.env.ADMIN_EMAIL!;
  await User.deleteOne({ email });

  await User.create({
    name: process.env.ADMIN_NAME || "Admin",
    email,
    password: process.env.ADMIN_PASSWORD || "Admin@123",
    role: "admin"
  });

  console.log("Admin created ✔", email);
  await mongoose.disconnect();
  process.exit(0);
};

run().catch(err => {
  console.error(err);
  process.exit(1);
});
