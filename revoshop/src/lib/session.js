import {
  ADMIN_ROLE,
  AUTH_SESSION_COOKIE,
  USER_ROLE,
} from "@/lib/auth-constants";

export function normalizeUserRole(role) {
  // Role lama seperti recipe-auditor/recipe-editor dan role Platzi customer
  // semuanya diperlakukan sebagai pengguna biasa.
  return role === "admin" || role === "master-curator"
    ? ADMIN_ROLE
    : USER_ROLE;
}

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
