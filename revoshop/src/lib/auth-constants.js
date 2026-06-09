// ============================================================
// KONSTANTA AUTENTIKASI
//
// File ini hanya berisi string konstan — tidak ada kode browser
// (localStorage, window, dll.) sehingga aman diimpor dari mana
// saja, termasuk dari middleware yang berjalan di Edge Runtime.
// ============================================================

// Kunci untuk menyimpan data sesi di localStorage
export const AUTH_STORAGE_KEY = "revoshop-auth-session";

// Nama event custom yang dikirim saat status login berubah
export const AUTH_UPDATED_EVENT = "auth-updated";

// Nama cookie yang menyimpan token autentikasi
export const AUTH_TOKEN_COOKIE = "revoshop-auth-token";

// Nama cookie yang menyimpan role pengguna (misal: "admin" atau "customer")
export const AUTH_ROLE_COOKIE = "revoshop-auth-role";
