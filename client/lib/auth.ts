"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function getTokenPayload() {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

export function requireAuthCheck(
  router: AppRouterInstance,
  allowedRoles: string[] = ["user"]
) {
  if (typeof window === "undefined") return false;

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || !role) {
    router.push("/auth/login");
    return false;
  }

  if (!allowedRoles.includes(role)) {
    router.push("/auth/login");
    return false;
  }

  return true;
}
