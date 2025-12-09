import express from "express";
import { getNavbarData } from "../controllers/navbarController";

const r = express.Router();
r.get("/", getNavbarData);

export default r;