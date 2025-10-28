import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');

  if(isAdminRoute){
    if(!token){
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
    // optional: we could call verify API to check role, but middleware is lightweight - else just allow and check on server-side rendered data
  }
  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*'] };
