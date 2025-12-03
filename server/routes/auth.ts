import express, { Request, Response } from "express";
import { register, login} from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";
// Inline adminOnly middleware (fallback) — ensure protect sets req.user with a role property
const adminOnly = (req: any, res: Response, next: any) => {
  const user: any = (req as any).user;
  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Access denied: admins only" });
  }
  next();
};

const router = express.Router();

// REGISTER
router.post("/register", register);

// LOGIN
router.post("/login", login);

// NORMAL USER PROTECTED ROUTE
router.get("/user", protect, (req: Request, res: Response) => {
  res.json({ message: "USER OK" });
});

// ADMIN ONLY PROTECTED ROUTE
router.get("/admin", protect, adminOnly, (req: Request, res: Response) => {
  res.json({ message: "ADMIN OK" });
});

export default router;
