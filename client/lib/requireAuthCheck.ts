// /lib/requireAuthCheck.ts
"use client";

export function requireAuthCheck(router: any, allowedRoles: string[] = []) {
  if (typeof window === "undefined") return false;

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    router.replace("/auth/login"); // replace instead of push
    return false;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role || "")) {
    router.replace("/auth/login"); // replace instead of push
    return false;
  }

  return true;
}
