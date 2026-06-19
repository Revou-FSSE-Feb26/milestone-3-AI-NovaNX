// Impor konstanta untuk dipakai di dalam fungsi-fungsi di bawah
import { AUTH_STORAGE_KEY, AUTH_UPDATED_EVENT } from "@/lib/auth-constants";

// Re-export agar komponen lain tetap bisa impor dari "@/lib/auth"
export {
  AUTH_STORAGE_KEY,
  AUTH_UPDATED_EVENT,
} from "@/lib/auth-constants";

// ============================================================
// FUNGSI AUTENTIKASI
// ============================================================

/**
 * Login menggunakan email dan password.
 * Mengirim request ke API internal /api/auth/login.
 * Mengembalikan data user jika berhasil, atau melempar error jika gagal.
 */
export async function loginWithCredentials(email, password) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    // Tampilkan pesan error dari server, atau pesan default jika tidak ada
    const errorMessage =
      body && body.message ? body.message : "Email atau password salah.";
    throw new Error(errorMessage);
  }

  return body;
}

/**
 * Mengambil user aktif dari HttpOnly session cookie melalui Route Handler.
 */
export async function getCurrentUser({ signal } = {}) {
  const response = await fetch("/api/auth/me", {
    method: "GET",
    cache: "no-store",
    signal,
  });

  if (response.status === 401) {
    return null;
  }

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(body?.message || "Failed to read authentication session.");
  }

  return body;
}

/**
 * Membaca data sesi login yang tersimpan di localStorage.
 * Mengembalikan null jika pengguna belum login atau data tidak valid.
 */
export function readAuthSession() {
  // localStorage hanya tersedia di browser, bukan di server (Next.js SSR)
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return JSON.parse(raw || "null");
  } catch {
    // Jika data di localStorage rusak/tidak valid, kembalikan null
    return null;
  }
}

// Digunakan secara internal oleh React untuk sinkronisasi state
export function getAuthSessionSnapshot() {
  if (typeof window === "undefined") {
    return "null";
  }
  return localStorage.getItem(AUTH_STORAGE_KEY) || "null";
}

// Versi server-side dari getAuthSessionSnapshot (selalu mengembalikan "null")
export function getAuthSessionServerSnapshot() {
  return "null";
}

/**
 * Menyimpan data sesi login ke localStorage.
 * Juga mengirim event agar komponen React bisa ikut diperbarui.
 */
export function writeAuthSession(authResult) {
  if (typeof window === "undefined") {
    return;
  }

  // Data bisa datang dalam format { user: {...} } atau langsung { id, email, ... }
  const user = authResult.user || authResult;

  const session = {
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
    avatar: user.avatar,
    loggedInAt: new Date().toISOString(),
  };

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));

  // Beritahu komponen lain bahwa status login telah berubah
  window.dispatchEvent(new Event(AUTH_UPDATED_EVENT));
}

export function removeStoredAuthSession() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(AUTH_STORAGE_KEY);
  window.dispatchEvent(new Event(AUTH_UPDATED_EVENT));
}

/**
 * Menghapus sesi login dari localStorage dan logout dari server.
 * Juga mengirim event agar komponen React bisa ikut diperbarui.
 */
export function clearAuthSession() {
  if (typeof window === "undefined") {
    return;
  }

  removeStoredAuthSession();

  // Kirim request logout ke server untuk menghapus cookie
  fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
}

/**
 * Mendaftarkan fungsi `callback` agar dipanggil saat status login berubah.
 * Digunakan di komponen React (biasanya di dalam useEffect).
 *
 * Mengembalikan fungsi untuk membatalkan pendaftaran (untuk cleanup di useEffect).
 */
export function subscribeToAuthSession(callback) {
  if (typeof window === "undefined") {
    // Tidak ada event di server, kembalikan fungsi cleanup kosong
    return function () {};
  }

  // Pantau perubahan dari tab yang sama
  window.addEventListener(AUTH_UPDATED_EVENT, callback);

  // Pantau perubahan localStorage dari tab lain
  window.addEventListener("storage", callback);

  // Fungsi cleanup: hentikan pendengaran saat komponen di-unmount
  return function () {
    window.removeEventListener(AUTH_UPDATED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
