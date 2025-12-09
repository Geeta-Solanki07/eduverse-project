// server/routes/authRoutes.ts
import express from "express";
import * as ctrl from "../controllers/authController";

const router = express.Router();

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.post("/logout", ctrl.logout);

export default router;
