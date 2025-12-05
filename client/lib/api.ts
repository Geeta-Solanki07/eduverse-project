// import axios from "axios";

// const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// const api = axios.create({
//   baseURL: base,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://eduverse-project.onrender.com/api"
      : "http://localhost:5000/api",
  withCredentials: true, // cookies ke liye
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request interceptor to attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

