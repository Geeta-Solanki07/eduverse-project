import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// lib/auth.ts
export function parseJwt(token: string | null) {
  try {
    if (!token) return null;
    const base64 = token.split(".")[1];
    const jsonPayload = decodeURIComponent(
      atob(base64).split("").map((c) =>
        "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
      ).join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export function isTokenExpired(token: string | null) {
  const payload = parseJwt(token);
  if (!payload || !payload.exp) return true;
  // payload.exp is in seconds
  return Date.now() >= payload.exp * 1000;
}

export function requireAuthCheck(router: AppRouterInstance | string[]) {
  // call this in components/pages to guard client-side
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    router.push("/login");
    return false;
  }
  return true;
}
