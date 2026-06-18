import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { AUTH_SESSION_COOKIE } from "@/lib/auth-constants";

const PLATZI_API_URL = "https://api.escuelajs.co/api/v1";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 },
      );
    }

    const loginResponse = await fetch(`${PLATZI_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        password,
      }),
      cache: "no-store",
    });

    const loginData = await loginResponse.json();

    if (!loginResponse.ok) {
      return NextResponse.json(
        { message: loginData.message || "Invalid email or password." },
        { status: loginResponse.status },
      );
    }

    // Fetch user profile using the access token
    const profileResponse = await fetch(`${PLATZI_API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`, // Use the access token for authentication
      },
      cache: "no-store",
    });

    const profile = await profileResponse.json();

    if (!profileResponse.ok) {
      return NextResponse.json(
        { message: profile.message || "Failed to fetch user profile." },
        { status: profileResponse.status },
      );
    }

    const authUser = {
      id: profile.id,
      email: profile.email,
      name: profile.name,
      avatar: profile.avatar,
      role: profile.role === "admin" ? "admin" : "user", // map the role to either "admin" or "user"
    };

    const sessionData = { // Store the user data and access token in the session
      user: authUser,
      token: loginData.access_token,
    };

    // Set the session cookie with the user data and access token
    const cookieStore = await cookies();
    cookieStore.set(AUTH_SESSION_COOKIE, JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 30,
    });

    return NextResponse.json({ user: authUser });
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { message: "An unexpected authentication error occurred." },
      { status: 500 },
    );
  }
}
