export async function checkAdmin() {
  const res = await fetch("/api/auth/me");
  const data = await res.json();
  return data.role === "admin";
}
