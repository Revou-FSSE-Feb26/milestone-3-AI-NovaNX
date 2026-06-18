import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { AUTH_SESSION_COOKIE, parseSessionCookie } from "@/lib/session";

export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(AUTH_SESSION_COOKIE);
  const sessionData = parseSessionCookie(sessionCookie?.value);

  if (!sessionData) {
    return NextResponse.json(null, { status: 401 });
  }

  const profileResponse = await fetch(
    "https://api.escuelajs.co/api/v1/auth/profile",
    {
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
    cache: "no-store",
    },
  ).catch(() => null);

  if (!profileResponse?.ok) {
    cookieStore.set(AUTH_SESSION_COOKIE, "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });
    return NextResponse.json(null, { status: 401 });
  }

  const profile = await profileResponse.json();
  if (
    String(profile.id) !== String(sessionData.user.id) ||
    profile.email !== sessionData.user.email
  ) {
    return NextResponse.json(null, { status: 401 });
  }

  return NextResponse.json(sessionData.user);
}
