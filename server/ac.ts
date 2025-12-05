// src/scripts/ac.ts

import mongoose from "mongoose";
import dotenv from "dotenv";
import AcademicClass from "./models/AcademicClass";

dotenv.config();

async function main() {
  try {
    const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/eduverse";

    await mongoose.connect(MONGO);
    console.log("✅ Connected to MongoDB");

    // Clear old data (optional but useful for seed)
    await AcademicClass.deleteMany({});
    console.log("🗑️ Old Academic Classes deleted");

    const classes = [
      // ========== ELEMENTARY (1–5) ==========
      {
        title: "Class 1st",
        slug: "class-1",
        category: "elementary",
        description: "Basic foundation for young learners.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Numbers", notes: "Introduction to numbers" },
              { title: "Addition", notes: "Basic addition" },
            ],
          },
          {
            title: "English",
            slug: "english",
            chapters: [
              { title: "Alphabet", notes: "Learn A to Z" },
              { title: "Words", notes: "Simple vocabulary" },
            ],
          },
        ],
      },

      {
        title: "Class 2nd",
        slug: "class-2",
        category: "elementary",
        description: "Strengthening basics in math and language.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Subtraction", notes: "Basic subtraction" },
              { title: "Multiplication", notes: "Intro to multiplication" },
            ],
          },
          {
            title: "English",
            slug: "english",
            chapters: [
              { title: "Grammar", notes: "Simple grammar rules" },
              { title: "Reading", notes: "Short stories" },
            ],
          },
        ],
      },

      {
        title: "Class 3rd",
        slug: "class-3",
        category: "elementary",
        description: "Developing problem solving and reading skills.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Division", notes: "Intro to division" },
              { title: "Fractions", notes: "Basics of fractions" },
            ],
          },
          {
            title: "Science",
            slug: "science",
            chapters: [
              { title: "Plants", notes: "Introduction to plants" },
              { title: "Animals", notes: "Basic animal study" },
            ],
          },
        ],
      },

      {
        title: "Class 4th",
        slug: "class-4",
        category: "elementary",
        description: "Exploring environment and advanced math.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Geometry", notes: "Shapes and angles" },
              { title: "Measurement", notes: "Length, weight, volume" },
            ],
          },
          {
            title: "Science",
            slug: "science",
            chapters: [
              { title: "Human Body", notes: "Basic organs" },
              { title: "Earth", notes: "Introduction to earth science" },
            ],
          },
        ],
      },

      {
        title: "Class 5th",
        slug: "class-5",
        category: "elementary",
        description: "Preparing for middle school concepts.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Decimals", notes: "Understanding decimals" },
              { title: "Percentages", notes: "Basics of percentages" },
            ],
          },
          {
            title: "Science",
            slug: "science",
            chapters: [
              { title: "Energy", notes: "Forms of energy" },
              { title: "Environment", notes: "Conservation basics" },
            ],
          },
        ],
      },

      // ========== JUNIOR (6–8) ==========
      {
        title: "Class 6th",
        slug: "class-6",
        category: "junior",
        description: "Introduction to advanced subjects.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Algebra", notes: "Basic algebra" },
              { title: "Geometry", notes: "Triangles and circles" },
            ],
          },
          {
            title: "Science",
            slug: "science",
            chapters: [
              { title: "Matter", notes: "States of matter" },
              { title: "Motion", notes: "Basics of motion" },
            ],
          },
        ],
      },

      {
        title: "Class 7th",
        slug: "class-7",
        category: "junior",
        description: "Strengthening logical and scientific thinking.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Integers", notes: "Operations on integers" },
              { title: "Probability", notes: "Intro to probability" },
            ],
          },
          {
            title: "Science",
            slug: "science",
            chapters: [
              { title: "Heat", notes: "Transfer of heat" },
              { title: "Light", notes: "Reflection and refraction" },
            ],
          },
        ],
      },

      {
        title: "Class 8th",
        slug: "class-8",
        category: "junior",
        description: "Preparing for high school concepts.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Linear Equations", notes: "Basics of equations" },
              { title: "Mensuration", notes: "Surface area and volume" },
            ],
          },
          {
            title: "Science",
            slug: "science",
            chapters: [
              { title: "Electricity", notes: "Current and circuits" },
              { title: "Magnetism", notes: "Magnetic fields" },
            ],
          },
        ],
      },

      // ========== SENIOR (9–12) ==========
      {
        title: "Class 9th",
        slug: "class-9",
        category: "senior",
        description: "Foundation for board exams.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Polynomials", notes: "Basics of polynomials" },
              { title: "Geometry", notes: "Constructions" },
            ],
          },
          {
            title: "Science",
            slug: "science",
            chapters: [
              { title: "Atoms", notes: "Structure of atom" },
              { title: "Force", notes: "Newton’s laws" },
            ],
          },
        ],
      },

      {
        title: "Class 10th",
        slug: "class-10",
        category: "senior",
        description: "Board exam preparation.",
        subjects: [
          {
            title: "Mathematics",
            slug: "math",
            chapters: [
              { title: "Trigonometry", notes: "Basics of trigonometry" },
              { title: "Statistics", notes: "Data handling" },
            ],
          },
          {
            title: "Science",
            slug: "science",
            chapters: [
              { title: "Chemical Reactions", notes: "Types of reactions" },
              { title: "Electricity", notes: "Ohm’s law" },
            ],
          },
        ],
      },

      {
        title: "Class 11th",
        slug: "class-11",
        category: "senior",
        description: "Advanced concepts for competitive exams.",
        subjects: [
          {
            title: "Physics",
            slug: "physics",
            chapters: [
              { title: "Kinematics", notes: "Motion in one dimension" },
              { title: "Waves", notes: "Sound waves" },
            ],
          },
          {
            title: "Chemistry",
            slug: "chemistry",
            chapters: [
              { title: "Thermodynamics", notes: "Heat and work" },
              { title: "Equilibrium", notes: "Chemical equilibrium" },
            ],
          },
        ],
      },

      {
        title: "Class 12th",
        slug: "class-12",
        category: "senior",
        description: "Board exam + competitive preparation.",
        subjects: [
          {
            title: "Physics",
            slug: "physics",
            chapters: [
              { title: "Electromagnetism", notes: "JEE-level problem solving" },
              {
                title: "Optics",
                videoUrl: "https://youtube.com/physics-optics",
              },
            ],
          },
          {
            title: "Chemistry",
            slug: "chemistry",
            chapters: [
              { title: "Organic Chemistry", notes: "Reaction mechanisms" },
              { title: "Inorganic Chemistry", notes: "Periodic properties" },
            ],
          },
          {
            title: "Mathematics",
            slug: "maths",
            chapters: [
              { title: "Calculus", notes: "Differentiation & Integration" },
              { title: "Vectors", videoUrl: "https://youtube.com/maths-vectors" },
            ],
          },
          {
            title: "Biology",
            slug: "biology",
            chapters: [
              { title: "Genetics", notes: "Mendelian inheritance" },
              { title: "Biotechnology", videoUrl: "https://youtube.com/biology-biotech" },
            ],
          },
          {
            title: "English",
            slug: "english",
            chapters: [
              { title: "Writing Skills", notes: "Formal and informal writing" },
              { title: "Literature", notes: "Poems and short stories" },
            ],
          },
        ],
      },
    ];

    await AcademicClass.insertMany(classes);
    console.log("✅ All Academic Classes added successfully!");

    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
  } catch (error) {
    console.error("❌ Error inserting academic classes:", error);
    process.exit(1);
  }
}

main();
