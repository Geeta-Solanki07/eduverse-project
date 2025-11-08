import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token") || req.headers.get("authorization");

  const path = req.nextUrl.pathname;
  if (!token && (path.startsWith("/admin") || path.startsWith("/user"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
