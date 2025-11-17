import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function logout(router: AppRouterInstance) {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
  }

  // Clear cookie token
  document.cookie =
    "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=None; Secure";

  router.replace("/auth/login");
}
