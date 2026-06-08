import { NextResponse } from "next/server";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";
const LOCAL_ACCOUNTS = [
  {
    email: "nico@gmail.com",
    password: "1234",
    user: {
      id: "local-user-nico",
      email: "nico@gmail.com",
      name: "Nico User",
      role: "customer",
      avatar: "",
    },
  },
  {
    email: "user@example.com",
    password: "user123",
    user: {
      id: "local-user-demo",
      email: "user@example.com",
      name: "Demo User",
      role: "customer",
      avatar: "",
    },
  },
  {
    email: "admin@example.com",
    password: "admin123",
    user: {
      id: "local-admin-demo",
      email: "admin@example.com",
      name: "Demo Admin",
      role: "admin",
      avatar: "",
    },
  },
];
const API_LOGIN_EMAILS = new Set(["admin@mail.com"]);
const ALLOWED_LOGIN_EMAILS = new Set([
  ...LOCAL_ACCOUNTS.map((account) => account.email),
  ...API_LOGIN_EMAILS,
]);

function buildError(message, status = 400) {
  return NextResponse.json({ message }, { status });
}

async function requestJson(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(body?.message || `Request failed: ${response.status}`);
  }

  return body;
}

function sanitizeUser(user) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    avatar: user.avatar,
    creationAt: user.creationAt,
    updatedAt: user.updatedAt,
  };
}

function findLocalAccount(email, password) {
  return LOCAL_ACCOUNTS.find(
    (account) => account.email === email && account.password === password,
  );
}

function buildAuthResponse(user, token) {
  const response = NextResponse.json({
    user: sanitizeUser(user),
  });

  response.cookies.set("revoshop-auth-token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  response.cookies.set("revoshop-auth-role", user.role, {
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      return buildError("Email and password are required.");
    }

    if (!ALLOWED_LOGIN_EMAILS.has(normalizedEmail)) {
      return buildError("This account is not allowed to access RevoShop.", 401);
    }

    const localAccount = findLocalAccount(normalizedEmail, password);
    if (localAccount) {
      return buildAuthResponse(
        localAccount.user,
        `local-${localAccount.user.role}-${Date.now()}`,
      );
    }

    if (!API_LOGIN_EMAILS.has(normalizedEmail)) {
      return buildError("Invalid email or password.", 401);
    }

    const tokens = await requestJson("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: normalizedEmail,
        password,
      }),
    });

    const profile = await requestJson("/auth/profile", {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    return buildAuthResponse(profile, tokens.access_token);
  } catch (error) {
    return buildError(error.message || "Login failed.", 401);
  }
}
