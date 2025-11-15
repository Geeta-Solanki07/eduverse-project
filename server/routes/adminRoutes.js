import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";
import * as adminCtrl from "../controllers/adminController.js";
import * as courseCtrl from "../controllers/courseController.js";

const router = express.Router();

router.get("/stats", protect, adminOnly, adminCtrl.stats);

// users
router.get("/users", protect, adminOnly, adminCtrl.getUsers);
router.post("/users", protect, adminOnly, adminCtrl.addUser);
router.put("/users/:id", protect, adminOnly, adminCtrl.updateUser);
router.delete("/users/:id", protect, adminOnly, adminCtrl.deleteUser);

// courses
router.get("/courses", protect, adminOnly, courseCtrl.getCourses);
router.post("/courses", protect, adminOnly, courseCtrl.addCourse);
router.put("/courses/:id", protect, adminOnly, courseCtrl.updateCourse);
router.delete("/courses/:id", protect, adminOnly, courseCtrl.deleteCourse);

export default router;
