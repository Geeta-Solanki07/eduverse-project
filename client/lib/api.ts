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
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;

