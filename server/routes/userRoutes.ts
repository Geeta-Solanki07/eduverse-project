// server/routes/userRoutes.ts
import express from "express";
import * as ctrl from "../controllers/userController";
import { protect } from "../middleware/auth";

const router = express.Router();

router.get("/me", protect, ctrl.getMe);
router.put("/update", protect, ctrl.updateProfile);
router.put("/change-password", protect, ctrl.changePassword);

export default router;
