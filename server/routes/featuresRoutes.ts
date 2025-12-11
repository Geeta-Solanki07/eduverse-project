import express from "express";

const router = express.Router();

// GET /features
router.get("/", (req, res) => {
  res.json({
    features: [
      {
        id: 1,
        title: "Hands-On Projects",
        description: "Focus on experiments, and real-life applications",
        image: "/assets/ac/interactive.svg",
        bg: "bg-[#D9FFE6]",
      },
      {
        id: 2,
        title: "Interactive Sessions",
        description: "Play-based learning for deeper understanding of concepts",
        image: "/assets/ac/interactive.svg",
        bg: "bg-[#FFE7D9]",
      },
      {
        id: 3,
        title: "Future Ready",
        description: "Developing communication, empathy, and leadership skills",
        image: "/assets/ac/future-ready.svg",
        bg: "bg-[#B8D7FF]",
      },
    ],
  });
});

export default router;
