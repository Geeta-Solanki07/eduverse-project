export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Your DB logic here...
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user in DB and verify password
    // If success:
    res.status(200).json({ message: "Login successful" });
    // Else:
    // res.status(400).json({ message: "Invalid credentials" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
