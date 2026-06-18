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

export { AUTH_SESSION_COOKIE };
