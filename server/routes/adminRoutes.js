import express from "express";
import { verifyAdmin } from "../middleware/authMiddleware.js";
import { getUsers, deleteUser, addCourse, getCourses, updateCourse, deleteCourse } from "../controllers/adminController.js";
const router = express.Router();

router.get("/users", verifyAdmin, getUsers);
router.delete("/users/:id", verifyAdmin, deleteUser);

router.post("/courses", verifyAdmin, addCourse);
router.get("/courses", getCourses); // public
router.put("/courses/:id", verifyAdmin, updateCourse);
router.delete("/courses/:id", verifyAdmin, deleteCourse);

export default router;
