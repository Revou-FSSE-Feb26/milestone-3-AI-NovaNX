import { NextResponse } from "next/server";

import {
  AUTH_SESSION_COOKIE,
  isAdminSession,
  parseSessionCookie,
} from "@/lib/session";

const PROTECTED_ROUTES = ["/", "/cart", "/checkout", "/products", "/promotion"];

function redirectTo(pathname, request) {
  return NextResponse.redirect(new URL(pathname, request.url));
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const session = parseSessionCookie(
    request.cookies.get(AUTH_SESSION_COOKIE)?.value,
  );
  const isLoggedIn = Boolean(session);
  const isLoginPage = pathname === "/login";
  const isAdminPage = pathname.startsWith("/admin");
  const isProtectedPage = PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (isLoginPage && isLoggedIn) {
    return redirectTo("/", request);
  }

  if (isLoginPage) {
    return NextResponse.next();
  }

  if (isAdminPage) {
    if (!isLoggedIn) {
      return redirectTo("/login", request);
    }

    if (!isAdminSession(session)) {
      return redirectTo("/", request);
    }
  }

  if (isProtectedPage && !isLoggedIn) {
    return redirectTo("/login", request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/admin/:path*",
    "/cart/:path*",
    "/checkout/:path*",
    "/products/:path*",
    "/promotion/:path*",
    "/login",
  ],
};
