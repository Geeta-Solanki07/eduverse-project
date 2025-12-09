// server/routes/settingsRoutes.ts
import express from "express";
import * as ctrl from "../controllers/settingsController";
import { protect, isAdmin } from "../middleware/auth";

const router = express.Router();

router.get("/", protect, isAdmin, ctrl.getSettings);
router.put("/", protect, isAdmin, ctrl.updateSettings);

export default router;
