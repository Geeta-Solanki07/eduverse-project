// /lib/auth.ts
export function requireAuthCheck(router: any, allowedRoles: string[] = []) {
  if (typeof window === "undefined") return false;

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    router.push("/login");
    return false;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role || "")) {
    router.push("/login");
    return false;
  }

  return true;
}
