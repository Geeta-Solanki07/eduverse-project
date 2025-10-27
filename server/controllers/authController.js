import User from "../models/User.js";

// ✅ Register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

// ✅ Login user
export const loginUser = async (req, res) => {
  res.send("Login route working ✅");
};
