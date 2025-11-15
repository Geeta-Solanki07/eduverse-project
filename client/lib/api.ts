// import axios from "axios";

// const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// const api = axios.create({
//   baseURL: base,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true
// });

// export default api;


// lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://eduverse-project.onrender.com/api"
      : "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
