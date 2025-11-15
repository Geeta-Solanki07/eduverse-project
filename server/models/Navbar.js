import mongoose from "mongoose";

const NavbarSchema = new mongoose.Schema({
  academics: [
    {
      title: String,       // Example: "1st Class"
      link: String,        // /1st-class
      category: String,    // elementary / junior / senior
    }
  ],
  itCourses: [
    {
      title: String,      // Example: "Full Stack Development"
      link: String,       // /it/fullstack
      level: String,      // beginner / intermediate / advanced
    }
  ],
  otherLinks: [
    {
      title: String,      // Study Materials, Support, etc
      link: String,
    }
  ]
});

export default mongoose.models.Navbar || mongoose.model("Navbar", NavbarSchema);
