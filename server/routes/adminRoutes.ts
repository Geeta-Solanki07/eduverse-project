// server/routes/adminRoutes.ts
import express from "express";
import { protect, isAdmin } from "../middleware/auth";
import * as ctrl from "../controllers/adminController";

const router = express.Router();

// USERS
router.get("/users", protect, isAdmin, ctrl.listUsers);
router.put("/users/:id/role", protect, isAdmin, ctrl.changeUserRole);
router.delete("/users/:id", protect, isAdmin, ctrl.deleteUser);

// CLASSES
router.get("/classes", protect, isAdmin, ctrl.listClasses);
router.post("/classes", protect, isAdmin, ctrl.createClass);
router.delete("/classes/:id", protect, isAdmin, ctrl.deleteClass);

// SUBJECTS
router.get("/subjects", protect, isAdmin, ctrl.listSubjectsByClass);
router.post("/subjects", protect, isAdmin, ctrl.createSubject);
router.delete("/subjects/:id", protect, isAdmin, ctrl.deleteSubject);

// CHAPTERS
router.get("/chapters", protect, isAdmin, ctrl.listChaptersBySubject);
router.post("/chapters", protect, isAdmin, ctrl.createChapter);
router.delete("/chapters/:id", protect, isAdmin, ctrl.deleteChapter);

// IT COURSES
router.get("/it-courses", protect, isAdmin, ctrl.listITCourses);
router.post("/it-courses", protect, isAdmin, ctrl.createITCourse);
router.delete("/it-courses/:id", protect, isAdmin, ctrl.deleteITCourse);

export default router;
