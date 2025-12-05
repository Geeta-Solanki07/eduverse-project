import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  const features = [
    { id: 1, title: "Hands-On Projects", description: "Experiments & real-life applications", image: "/assets/ac/interactive.svg", bg: "#D9FFE6" },
    { id: 2, title: "Interactive Sessions", description: "Play-based learning", image: "/assets/ac/interactive.svg", bg: "#FFE7D9" },
    { id: 3, title: "Future Ready", description: "Communication, empathy & leadership", image: "/assets/ac/future-ready.svg", bg: "#B8D7FF" },
  ];
  res.json({ features });
});

export default router;
