import { NextResponse } from "next/server";

// Impor dari auth-constants.js, bukan auth.js,
// karena middleware berjalan di Edge Runtime dan tidak bisa
// menggunakan kode browser (localStorage, window, dll.)
import { AUTH_ROLE_COOKIE, AUTH_TOKEN_COOKIE } from "@/lib/auth-constants";

const PROTECTED_ROUTES = ["/", "/cart", "/checkout", "/products", "/promotion"];

function redirectTo(pathname, request) {
  return NextResponse.redirect(new URL(pathname, request.url));
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_TOKEN_COOKIE)?.value;
  const role = request.cookies.get(AUTH_ROLE_COOKIE)?.value;
  const isLoggedIn = Boolean(token);
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

    if (role !== "admin") {
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
