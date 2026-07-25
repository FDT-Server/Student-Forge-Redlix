import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAdminSessionFromCookie, COOKIE_NAME } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // We only care about /admin paths
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get(COOKIE_NAME)?.value;
  const session = await verifyAdminSessionFromCookie(sessionCookie);
  const isAuthenticated = !!session;

  const isLoginPage = pathname === "/admin/login";

  // If user tries to access /admin/login while authenticated -> redirect to dashboard
  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  // If user tries to access protected admin routes without authentication -> redirect to login
  if (!isLoginPage && !isAuthenticated) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};
