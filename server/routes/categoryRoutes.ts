import express from "express";
import { getCategories, getCategoryWithSubs } from "../controllers/categoryController";
const router = express.Router();
router.get("/", getCategories);
router.get("/:key", getCategoryWithSubs);
export default router;
