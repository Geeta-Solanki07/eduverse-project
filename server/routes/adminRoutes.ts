import express from "express";
import { getAllUsers, updateUserRole, deleteUser } from "../controllers/userController";
import { protect, adminOnly } from "../middleware/auth";

const router = express.Router();

// All routes protected & admin-only
router.use(protect, adminOnly);

router.get("/users", getAllUsers);
router.put("/users/:id/role", updateUserRole);
router.delete("/users/:id", deleteUser);

export default router;
