// server/routes/academicRoutes.ts
import express from "express";
import * as ctrl from "../controllers/academicController";

const router = express.Router();

router.get("/classes", ctrl.getAllClasses);
router.get("/classes/:slug", ctrl.getClassBySlug);
router.get("/classes/:classId/subjects", ctrl.getSubjectsForClass);
router.get("/subjects/:subjectId/chapters", ctrl.getChaptersForSubject);

export default router;
