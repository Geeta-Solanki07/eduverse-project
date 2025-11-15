// routes/auth.js
import express from "express";
import { register, login, logout, me } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, me);
router.get("/logout", logout);

export default router;
