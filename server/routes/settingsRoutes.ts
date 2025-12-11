import express from "express";
import { protect, isAdmin } from "../middleware/auth";
import { getSettings, updateSettings } from "../controllers/settingsController";

const router = express.Router();

// GET /api/admin/settings
router.get("/settings", protect, isAdmin, getSettings);

// PUT /api/admin/settings
router.put("/settings", protect, isAdmin, updateSettings);

export default router;
