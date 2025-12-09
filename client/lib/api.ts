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

// Attach Authorization header from localStorage token (if present)
api.interceptors.request.use((config) => {
  try {
    const token = (typeof window !== "undefined") ? localStorage.getItem("token") : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {
    // ignore in SSR
  }
  return config;
}, (error) => Promise.reject(error));

// Optional: handle auth errors globally
api.interceptors.response.use(
  (res) => res,
  (err) => {
    // if 401 unauthenticated, you may auto-logout or route to login
    if (err?.response?.status === 401) {
      try {
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("name");
        }
      } catch (e) {}
    }
    return Promise.reject(err);
  }
);

export default api;
