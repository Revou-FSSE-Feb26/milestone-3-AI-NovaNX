export const AUTH_STORAGE_KEY = "revoshop-auth-session";
export const AUTH_UPDATED_EVENT = "auth-updated";

const ACCOUNTS = [
{
  email: "user@example.com",
  password: "user123",
  role: "user",
  name: "RevoShop User"
},
{
  email: "admin@example.com",
  password: "admin123",
  role: "admin",
  name: "RevoShop Admin"
}];


function isBrowser() {
  return typeof window !== "undefined";
}

export function loginWithCredentials(email, password) {
  return ACCOUNTS.find(
    (account) => account.email === email && account.password === password
  );
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

export function writeAuthSession(account) {
  if (!isBrowser()) {
    return;
  }

  const session = {
    email: account.email,
    role: account.role,
    name: account.name,
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
