// import axios from "axios";

// const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// const api = axios.create({
//   baseURL: base,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true
// });

// export default api;


import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://eduverse-project.vercel.app/" // ✅ Production backend
      : "http://localhost:5000/api",               // ✅ Local backend for dev
});

// Attach JWT token if exists
API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

