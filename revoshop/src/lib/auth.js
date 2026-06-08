export const AUTH_STORAGE_KEY = "revoshop-auth-session";
export const AUTH_UPDATED_EVENT = "auth-updated";
export const AUTH_TOKEN_COOKIE = "revoshop-auth-token";
export const AUTH_ROLE_COOKIE = "revoshop-auth-role";

function isBrowser() {
  return typeof window !== "undefined";
}

export async function loginWithCredentials(email, password) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(body?.message || "Invalid email or password.");
  }

  return body;
}

export function readAuthSession() {
  if (!isBrowser()) {
    return null;
  }

  try {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

export function getAuthSessionSnapshot() {
  if (!isBrowser()) {
    return "null";
  }

  return localStorage.getItem(AUTH_STORAGE_KEY) || "null";
}

export function getAuthSessionServerSnapshot() {
  return "null";
}

export function writeAuthSession(authResult) {
  if (!isBrowser()) {
    return;
  }

  const user = authResult.user || authResult;
  const session = {
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
    avatar: user.avatar,
    loggedInAt: new Date().toISOString()
  };

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(AUTH_UPDATED_EVENT));
}

export function clearAuthSession() {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(AUTH_STORAGE_KEY);
  fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
  window.dispatchEvent(new Event(AUTH_UPDATED_EVENT));
}

export function subscribeToAuthSession(callback) {
  if (!isBrowser()) {
    return () => {};
  }

  window.addEventListener(AUTH_UPDATED_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(AUTH_UPDATED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
