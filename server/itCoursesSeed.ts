import mongoose from "mongoose";
import dotenv from "dotenv";
import ITCourse from "./models/ITCourse";

dotenv.config();
mongoose.connect(process.env.MONGO_URI as string);

async function seed() {
  await ITCourse.deleteMany();

  await ITCourse.insertMany([

    // ===================== BEGINNER (5) =====================

    {
      title: "HTML & CSS Fundamentals",
      slug: "html-css-fundamentals",
      categoryKey: "it",
      level: "Beginner",
      summary: "Learn HTML & CSS from scratch",
      description: "Build modern responsive websites using HTML5 and CSS3.",
      price: 2999,
      image: "/assets/it/html.png",
      curriculum: [
        { week: "Week 1: HTML Basics", lessons: [{ title: "HTML Intro" }, { title: "Tags & Elements" }, { title: "Forms" }] },
        { week: "Week 2: CSS Basics", lessons: [{ title: "Selectors" }, { title: "Box Model" }, { title: "Flexbox" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "Frontend Developer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "JavaScript Basics",
      slug: "javascript-basics",
      categoryKey: "it",
      level: "Beginner",
      summary: "JavaScript fundamentals",
      description: "Learn JavaScript core concepts from zero.",
      price: 2999,
      image: "/assets/it/js.png",
      curriculum: [
        { week: "Week 1: JS Basics", lessons: [{ title: "Variables" }, { title: "Operators" }, { title: "Conditions" }] },
        { week: "Week 2: Logic", lessons: [{ title: "Functions" }, { title: "Arrays" }, { title: "Loops" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "JavaScript Instructor", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "Python for Beginners",
      slug: "python-for-beginners",
      categoryKey: "it",
      level: "Beginner",
      summary: "Python programming basics",
      description: "Beginner friendly Python programming course.",
      price: 2999,
      image: "/assets/it/python.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "Syntax" }, { title: "Variables" }, { title: "Input Output" }] },
        { week: "Week 2", lessons: [{ title: "Conditions" }, { title: "Loops" }, { title: "Functions" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "Python Developer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "Version Control (Git & GitHub)",
      slug: "version-control",
      categoryKey: "it",
      level: "Beginner",
      summary: "Learn Git & GitHub",
      description: "Track and manage code using Git & GitHub.",
      price: 2999,
      image: "/assets/it/git.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "Git Basics" }, { title: "Git Commands" }] },
        { week: "Week 2", lessons: [{ title: "GitHub Repo" }, { title: "Pull Requests" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "Software Engineer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "Introduction to Databases",
      slug: "introduction-to-databases",
      categoryKey: "it",
      level: "Beginner",
      summary: "Database fundamentals",
      description: "Learn SQL & NoSQL basics.",
      price: 2999,
      image: "/assets/it/db.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "What is DB?" }, { title: "SQL Intro" }] },
        { week: "Week 2", lessons: [{ title: "NoSQL Intro" }, { title: "MongoDB Basics" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "DB Instructor", image: "/assets/it/testi-boy.png" },
    },

    // ===================== INTERMEDIATE (5) =====================

    {
      title: "React.js Development",
      slug: "react-development",
      categoryKey: "it",
      level: "Intermediate",
      summary: "Build React applications",
      description: "Create scalable React apps using hooks.",
      price: 3999,
      image: "/assets/it/react.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "JSX" }, { title: "Components" }] },
        { week: "Week 2", lessons: [{ title: "Hooks" }, { title: "Routing" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "Senior React Developer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "Node.js & Express.js",
      slug: "node-development",
      categoryKey: "it",
      level: "Intermediate",
      summary: "Backend development",
      description: "Build APIs using Node & Express.",
      price: 3999,
      image: "/assets/it/node.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "Node Basics" }, { title: "NPM" }] },
        { week: "Week 2", lessons: [{ title: "Express Routes" }, { title: "Middleware" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "Backend Developer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "REST API Development",
      slug: "rest-api-development",
      categoryKey: "it",
      level: "Intermediate",
      summary: "API design",
      description: "Create REST APIs professionally.",
      price: 3999,
      image: "/assets/it/api.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "REST Concepts" }, { title: "HTTP Methods" }] },
        { week: "Week 2", lessons: [{ title: "JWT Auth" }, { title: "API Security" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "API Specialist", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "MongoDB & SQL Databases",
      slug: "mongodb",
      categoryKey: "it",
      level: "Intermediate",
      summary: "Database mastery",
      description: "Advanced DB handling.",
      price: 3999,
      image: "/assets/it/mongo.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "MongoDB CRUD" }] },
        { week: "Week 2", lessons: [{ title: "Indexes" }, { title: "Aggregation" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "DB Engineer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "UI/UX Principles",
      slug: "ui-ux-principles",
      categoryKey: "it",
      level: "Intermediate",
      summary: "Design principles",
      description: "UI/UX design fundamentals.",
      price: 3999,
      image: "/assets/it/uiux.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "Design Basics" }] },
        { week: "Week 2", lessons: [{ title: "User Flow" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "UI/UX Designer", image: "/assets/it/testi-boy.png" },
    },

    // ===================== ADVANCED (5) =====================

    {
      title: "Full Stack Web Development",
      slug: "full-stack-web-development",
      categoryKey: "it",
      level: "Advanced",
      summary: "MERN Stack",
      description: "Become a full stack developer.",
      price: 4999,
      image: "/assets/it/fullstack.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "Frontend Advanced" }] },
        { week: "Week 2", lessons: [{ title: "Backend APIs" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "Full Stack Engineer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "React Native Mobile Apps",
      slug: "react-native-mobile-apps",
      categoryKey: "it",
      level: "Advanced",
      summary: "Mobile apps",
      description: "Build Android & iOS apps.",
      price: 4999,
      image: "/assets/it/reactnative.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "RN Basics" }] },
        { week: "Week 2", lessons: [{ title: "Navigation" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "Mobile Developer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "Cloud Computing",
      slug: "cloud-computing",
      categoryKey: "it",
      level: "Advanced",
      summary: "Cloud basics",
      description: "AWS & cloud fundamentals.",
      price: 4999,
      image: "/assets/it/cloud.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "Cloud Intro" }] },
        { week: "Week 2", lessons: [{ title: "AWS Services" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "Cloud Engineer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "DevOps & Deployment",
      slug: "devops",
      categoryKey: "it",
      level: "Advanced",
      summary: "CI/CD pipelines",
      description: "Deploy apps professionally.",
      price: 4999,
      image: "/assets/it/devops.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "CI/CD Basics" }] },
        { week: "Week 2", lessons: [{ title: "Docker" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "DevOps Engineer", image: "/assets/it/testi-boy.png" },
    },

    {
      title: "AI & Machine Learning",
      slug: "ai-machine-learning",
      categoryKey: "it",
      level: "Advanced",
      summary: "ML concepts",
      description: "AI & ML fundamentals.",
      price: 4999,
      image: "/assets/it/ai.png",
      curriculum: [
        { week: "Week 1", lessons: [{ title: "AI Intro" }] },
        { week: "Week 2", lessons: [{ title: "ML Models" }] },
      ],
      instructor: { name: "Pradeep Kumar", role: "AI Engineer", image: "/assets/it/testi-boy.png" },
    },

  ]);

  console.log("✅ 15 IT COURSES SEEDED SUCCESSFULLY");
  process.exit();
}

seed();
