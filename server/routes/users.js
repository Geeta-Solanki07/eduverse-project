import express from "express";
import { listUsers, makeAdmin } from "../controllers/userController.js";
import { verifyToken, requireAdmin } from "../middleware/auth.js";
const router = express.Router();

router.get("/", verifyToken, requireAdmin, listUsers);
router.put("/make-admin/:id", verifyToken, requireAdmin, makeAdmin);

export default router;
