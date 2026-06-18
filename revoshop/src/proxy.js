import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get("session")?.value;

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const sessionData = JSON.parse(sessionCookie);
    const user = sessionData.user;

    if (pathname.startsWith("/admin") && user?.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Proxy authentication error:", error);

    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("session");

    return response;
  }
}

export const config = {
  matcher: ["/checkout/:path*", "/admin/:path*"],
};
