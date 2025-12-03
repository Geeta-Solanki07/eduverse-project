
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Category from "./models/Category";
import Subcategory from "./models/Subcategory";
import Course from "./models/Course";
import AcademicClass from "./models/AcademicClass";

const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/eduverse";

async function seed() {
  try {
    await mongoose.connect(MONGO);
    console.log("MongoDB Connected ✅");

    // ✅ CLEAN DATA FIRST
    await Category.deleteMany({});
    await Subcategory.deleteMany({});
    await Course.deleteMany({});
    await AcademicClass.deleteMany({});

    console.log("Old data deleted ✅");

    // ============ IT CATEGORY ============
    await Category.create({
      key: "it",
      name: "IT Courses",
      type: "it"
    });

    await Subcategory.insertMany([
      { key: "beginner", name: "Beginner", categoryKey: "it", slug: "beginner" },
      { key: "intermediate", name: "Intermediate", categoryKey: "it", slug: "intermediate" },
      { key: "advanced", name: "Advanced", categoryKey: "it", slug: "advanced" }
    ]);

   // ✅ IT COURSES
    await Course.insertMany([
      // Beginner
      { title: "HTML & CSS Fundamentals", slug: "html-css-fundamentals", summary: "Learn HTML and CSS", price: 2999, image: "/assets/it/html.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "beginner", level: "Beginner", lessons: [{ title: "Intro to HTML" }] },
      { title: "JavaScript Basics", slug: "javascript-basics", summary: "JS fundamentals", price: 2999, image: "/assets/it/js.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "beginner", level: "Beginner", lessons: [{ title: "JS Intro" }] },
      { title: "Python for Beginners", slug: "python-for-beginners", summary: "Learn Python", price: 2999, image: "/assets/it/python.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "beginner", level: "Beginner", lessons: [{ title: "Intro to Python" }] },
      { title: "Version Control (Git & GitHub)", slug: "version-control", summary: "Learn Git", price: 2999, image: "/assets/it/git.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "beginner", level: "Beginner", lessons: [{ title: "Git Basics" }] },
      { title: "Introduction to Databases", slug: "introduction-to-databases", summary: "Learn DB", price: 2999, image: "/assets/it/db.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "beginner", level: "Beginner", lessons: [{ title: "DB Basics" }] },

      // Intermediate
      { title: "React.js Development", slug: "react-development", summary: "Learn React.js", price: 3999, image: "/assets/it/react.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "intermediate", level: "Intermediate", lessons: [{ title: "React Components" }] },
      { title: "Node.js & Express.js", slug: "node-development", summary: "Server-side Node", price: 3999, image: "/assets/it/node.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "intermediate", level: "Intermediate", lessons: [{ title: "Express Setup" }] },
      { title: "REST API Development", slug: "rest-api-development", summary: "Build APIs", price: 3999, image: "/assets/it/api.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "intermediate", level: "Intermediate", lessons: [{ title: "REST Basics" }] },
      { title: "MongoDB & SQL Databases", slug: "mongodb", summary: "DB Concepts", price: 3999, image: "/assets/it/mongo.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "intermediate", level: "Intermediate", lessons: [{ title: "DB Intro" }] },
      { title: "UI/UX Principles", slug: "ui-ux-principles", summary: "Design Basics", price: 3999, image: "/assets/it/uiux.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "intermediate", level: "Intermediate", lessons: [{ title: "UI Basics" }] },

      // Advanced
      { title: "Full-Stack Web Development", slug: "full-stack-web-development", summary: "Advanced Full Stack", price: 4999, image: "/assets/it/fullstack.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "advanced", level: "Advanced", lessons: [{ title: "Full Stack Intro" }] },
      { title: "React Native Mobile Apps", slug: "react-native-mobile-apps", summary: "Mobile Apps", price: 4999, image: "/assets/it/reactnative.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "advanced", level: "Advanced", lessons: [{ title: "Mobile App Basics" }] },
      { title: "Cloud Computing", slug: "cloud-computing", summary: "Learn Cloud", price: 4999, image: "/assets/it/cloud.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "advanced", level: "Advanced", lessons: [{ title: "AWS Intro" }] },
      { title: "DevOps & Deployment", slug: "devops", summary: "Deploy Apps", price: 4999, image: "/assets/it/devops.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "advanced", level: "Advanced", lessons: [{ title: "CI/CD Basics" }] },
      { title: "AI & Machine Learning", slug: "ai-machine-learning", summary: "ML Concepts", price: 4999, image: "/assets/it/ai.png", instructor: "Pradeep", categoryKey: "it", subcategoryKey: "advanced", level: "Advanced", lessons: [{ title: "ML Intro" }] },
    ]);

    // ============ ACADEMIC CLASSES ============
    await AcademicClass.insertMany([

      // Elementary (1-5)
      { title: "Class 1st", slug: "class-1", category: "elementary", image: "/assets/ac/elementory.png", description: "Class 1 - All Subjects" },
      { title: "Class 2nd", slug: "class-2", category: "elementary", image: "/assets/ac/elementory.png", description: "Class 2 - All Subjects" },
      { title: "Class 3rd", slug: "class-3", category: "elementary", image: "/assets/ac/elementory.png", description: "Class 3 - All Subjects" },
      { title: "Class 4th", slug: "class-4", category: "elementary", image: "/assets/ac/elementory.png", description: "Class 4 - All Subjects" },
      { title: "Class 5th", slug: "class-5", category: "elementary", image: "/assets/ac/elementory.png", description: "Class 5 - All Subjects" },

      // Junior (6-8)
       {
    title: "Class 6th - Hindi",
    slug: "class-6-hindi",
    category: "junior",
    image: "/assets/ac/junior-class.png",
    description: "Class 6 - Hindi Subject"
  },
  {
    title: "Class 6th - English",
    slug: "class-6-english",
    category: "junior",
    image: "/assets/ac/junior-class.png",
    description: "Class 6 - English Subject"
  },

  // 🔹 Class 7
  {
    title: "Class 7th - Hindi",
    slug: "class-7-hindi",
    category: "junior",
    image: "/assets/ac/junior-class.png",
    description: "Class 7 - Hindi Subject"
  },
  {
    title: "Class 7th - English",
    slug: "class-7-english",
    category: "junior",
    image: "/assets/ac/junior-class.png",
    description: "Class 7 - English Subject"
  },

  // 🔹 Class 8
  {
    title: "Class 8th - Hindi",
    slug: "class-8-hindi",
    category: "junior",
    image: "/assets/ac/junior-class.png",
    description: "Class 8 - Hindi Subject"
  },
  {
    title: "Class 8th - English",
    slug: "class-8-english",
    category: "junior",
    image: "/assets/ac/junior-class.png",
    description: "Class 8 - English Subject"
  },

      // Senior (9-10)
  { title: "Class 9th", slug: "class-9", category: "senior", image: "/assets/ac/senior-class.png", description: "Class 9 - All Subjects" },
  { title: "Class 10th", slug: "class-10", category: "senior", image: "/assets/ac/senior-class.png", description: "Class 10 - All Subjects" },
  { title: "Class 11th", slug: "class-11", category: "senior", image: "/assets/ac/senior-class.png", description: "Class 11 - All Subjects" },
  { title: "Class 12th", slug: "class-12", category: "senior", image: "/assets/ac/senior-class.png", description: "Class 12 - All Subjects" },
    ]);

    console.log("✅ All data seeded successfully");
    process.exit(0);

  } catch (error) {
    console.error("Seeding error ❌", error);
    process.exit(1);
  }
}

seed();
