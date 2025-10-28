// export const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// async function request(path: string, opts: RequestInit = {}) {
//   const res = await fetch(API_BASE + path, {
//     credentials: "include",
//     headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
//     ...opts,
//   });
//   const data = await res.json().catch(() => null);
//   if (!res.ok) throw data || new Error("Request failed");
//   return data;
// }

// export default {
//   post: (path: string, body: any) => request(path, { method: "POST", body: JSON.stringify(body) }),
//   get: (path: string) => request(path, { method: "GET" }),
//   put: (path: string, body: any) => request(path, { method: "PUT", body: JSON.stringify(body) }),
//   del: (path: string) => request(path, { method: "DELETE" }),
// };


import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

export default api;
