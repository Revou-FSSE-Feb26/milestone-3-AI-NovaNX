import {
  ADMIN_ROLE,
  AUTH_SESSION_COOKIE,
} from "@/lib/auth-constants";

export function parseSessionCookie(value) {
  if (!value) {
    return null;
  }

  try {
    const session = JSON.parse(value);

    if (!session?.user || !session?.token) {
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

export function isAdminSession(session) {
  return session?.user?.role === ADMIN_ROLE;
}

export async function isVerifiedAdminRequest(request) {
  const session = parseSessionCookie(
    request.cookies.get(AUTH_SESSION_COOKIE)?.value,
  );

  if (!isAdminSession(session)) {
    return false;
  }

  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return false;
    }

    const profile = await response.json();
    return profile.role === ADMIN_ROLE;
  } catch {
    return false;
  }
}

export { AUTH_SESSION_COOKIE };
