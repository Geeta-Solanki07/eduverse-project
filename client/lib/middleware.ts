import { NextResponse } from "next/server";

export function middleware(req: any) {
  const token = req.cookies.get("token")?.value || null;

  // Public paths → no protection
  const publicPaths = ["/auth/login", "/auth/register"];
  if (publicPaths.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // If no token → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

// Protect all admin, teacher and user dashboards
export const config = {
  matcher: [
    "/admin/:path*",
    "/teacher/:path*",
    "/dashboard/:path*",
  ],
};
