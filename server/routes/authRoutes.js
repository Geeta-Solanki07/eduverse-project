import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/user", protect, (req, res) => res.json({ message: "USER OK" }));
router.get("/admin", protect, adminOnly, (req, res) => res.json({ message: "ADMIN OK" }));

export default router;
