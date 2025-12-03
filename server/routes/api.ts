import { Router } from "express";
import * as categoryCtrl from "../controllers/categoryController";
import * as subCtrl from "../controllers/subcategoryController";
import * as courseCtrl from "../controllers/courseController";

const router = Router();

// Categories
router.get("/categories", categoryCtrl.getCategories);
router.get("/categories/:key", categoryCtrl.getCategoryWithSubs);

// Subcategories
router.get("/subcategories", subCtrl.getSubcategories);
router.get("/subcategories/:key", subCtrl.getSubWithCourses);

// Courses
router.get("/courses", courseCtrl.getCourses);
router.get("/courses/:slug", courseCtrl.getCourse);

// Admin CRUD for courses (no auth in example — add middleware in prod)
router.post("/courses", courseCtrl.createCourse);
router.put("/courses/:slug", courseCtrl.updateCourse);
router.delete("/courses/:slug", courseCtrl.deleteCourse);

export default router;
