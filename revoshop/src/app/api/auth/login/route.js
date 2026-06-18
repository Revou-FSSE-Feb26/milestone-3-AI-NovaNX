import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { AUTH_SESSION_COOKIE } from "@/lib/auth-constants";
import { normalizeUserRole } from "@/lib/session";

const PLATZI_API_URL = "https://api.escuelajs.co/api/v1";
const SESSION_MAX_AGE_SECONDS = 60 * 30;

function buildError(message, status = 400) {
  return NextResponse.json({ message }, { status });
}

async function requestJson(path, options = {}) {
  const response = await fetch(`${PLATZI_API_URL}${path}`, {
    cache: "no-store",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = Array.isArray(data?.message)
      ? data.message.join(", ")
      : data?.message;
    throw new Error(message || `Authentication failed (${response.status}).`);
  }

  return data;
}

function buildUser(profile) {
  return {
    id: profile.id,
    email: profile.email,
    name: profile.name,
    avatar: profile.avatar,
    role: normalizeUserRole(profile.role),
  };
}

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      return buildError("Email and password are required.");
    }

    const tokens = await requestJson("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: normalizedEmail,
        password,
      }),
    });

    if (!tokens?.access_token) {
      return buildError("The authentication server did not return a token.", 502);
    }

    const profile = await requestJson("/auth/profile", {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    const authUser = buildUser(profile);
    const sessionData = {
      user: authUser,
      token: tokens.access_token,
    };

    const cookieStore = await cookies();
    cookieStore.set(AUTH_SESSION_COOKIE, JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_MAX_AGE_SECONDS,
    });

    return NextResponse.json({ user: authUser });
  } catch (error) {
    return buildError(error.message || "Invalid email or password.", 401);
  }
}
