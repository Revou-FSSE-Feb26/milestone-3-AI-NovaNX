// ============================================================
// KONSTANTA AUTENTIKASI
//
// File ini hanya berisi string konstan — tidak ada kode browser
// (localStorage, window, dll.) sehingga aman diimpor dari mana
// saja, termasuk dari proxy yang berjalan sebelum route/page.
// ============================================================

// Kunci untuk menyimpan data sesi di localStorage
export const AUTH_STORAGE_KEY = "revoshop-auth-session";

// Nama event custom yang dikirim saat status login berubah
export const AUTH_UPDATED_EVENT = "auth-updated";

// Nama cookie HttpOnly yang menyimpan session user dan access token.
export const AUTH_SESSION_COOKIE = "session";

// Role yang diberi akses ke dashboard admin RevoShop.
export const ADMIN_ROLE = "admin";

// Role pengguna biasa.
export const USER_ROLE = "user";
