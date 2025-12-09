// server/routes/analyticsRoutes.ts
import express from "express";
import { protect, isAdmin } from "../middleware/auth";
import * as ctrl from "../controllers/analyticsController";

const router = express.Router();

router.get("/", protect, isAdmin, ctrl.getAnalytics);

export default router;
