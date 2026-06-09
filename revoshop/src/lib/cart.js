// ============================================================
// KONSTANTA
// ============================================================

export const CART_STORAGE_KEY = "revoshop-cart"; // kunci keranjang
export const PRODUCT_VOUCHER_STORAGE_KEY = "revoshop-product-voucher"; // kunci voucher produk
export const SHIPPING_VOUCHER_STORAGE_KEY = "revoshop-shipping-voucher"; // kunci voucher ongkir
export const LEGACY_VOUCHER_STORAGE_KEY = "revoshop-voucher"; // kunci voucher lama (kompatibilitas)

export const CART_UPDATED_EVENT = "cart-updated"; // event saat keranjang berubah
export const VOUCHER_UPDATED_EVENT = "voucher-updated"; // event saat voucher berubah

// ============================================================
// NORMALISASI KATEGORI
// Memetakan berbagai nama kategori menjadi nama yang seragam
// ============================================================

// Daftar alias: jika nama kategori cocok (key), ganti dengan nilai (value)
const CATEGORY_ALIASES = {
  apparel: "Clothes",
  cloth: "Clothes",
  clothes: "Clothes",
  clothing: "Clothes",
  fashion: "Clothes",
  "mens shirts": "Clothes",
  shirt: "Clothes",
  shirts: "Clothes",
  tops: "Clothes",
  "womens dresses": "Clothes",
  shoe: "Shoes",
  shoes: "Shoes",
  "mens shoes": "Shoes",
  sneaker: "Shoes",
  sneakers: "Shoes",
  "womens shoes": "Shoes",
  electronic: "Electronics",
  electronics: "Electronics",
  gadget: "Electronics",
  gadgets: "Electronics",
  laptop: "Electronics",
  laptops: "Electronics",
  "mobile accessories": "Electronics",
  smartphone: "Electronics",
  smartphones: "Electronics",
  tablet: "Electronics",
  tablets: "Electronics",
  tech: "Electronics",
  furniture: "Furniture",
  home: "Furniture",
  "home decoration": "Furniture",
  household: "Furniture",
  "kitchen accessories": "Furniture",
};

/**
 * Mengubah nama kategori menjadi huruf kecil semua dan
 * menghapus karakter spesial agar mudah dibandingkan.
 *
 * Contoh: "Men's Shirts!" → "men s shirts"
 */
function normalizeCategoryKey(category) {
  return String(category || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ");
}

/**
 * Mengubah nama kategori produk menjadi nama kategori yang seragam
 * berdasarkan daftar CATEGORY_ALIASES di atas.
 *
 * Contoh: "laptops" → "Electronics", "shirts" → "Clothes"
 */
export function normalizeCartCategory(category) {
  const categoryKey = normalizeCategoryKey(category);

  if (!categoryKey) {
    return "Product";
  }

  // Cek apakah ada alias untuk kategori ini
  if (CATEGORY_ALIASES[categoryKey]) {
    return CATEGORY_ALIASES[categoryKey];
  }

  // Jika tidak ada alias, kembalikan nama apa adanya
  return categoryKey;
}

/**
 * Mengecek apakah kategori produk di keranjang sesuai dengan
 * kategori yang disyaratkan oleh voucher.
 *
 * Jika voucherCategory = "All", semua kategori dianggap cocok.
 */
export function isVoucherCategoryEligible(itemCategory, voucherCategory) {
  if (voucherCategory === "All") {
    return true;
  }

  return (
    normalizeCartCategory(itemCategory) ===
    normalizeCartCategory(voucherCategory)
  );
}

// ============================================================
// FUNGSI KERANJANG BELANJA (localStorage)
// ============================================================

/**
 * Membaca daftar item keranjang dari localStorage.
 * Mengembalikan array kosong jika keranjang belum ada atau kosong.
 */
export function readCartItems() {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = localStorage.getItem(CART_STORAGE_KEY);
  return JSON.parse(raw || "[]");
}

/**
 * Menyimpan daftar item keranjang ke localStorage.
 * Juga mengirim event agar komponen React bisa ikut diperbarui.
 */
export function writeCartItems(items) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

/**
 * Menghitung total jumlah item (quantity) di keranjang.
 * Contoh: 2 kaos + 1 sepatu = 3
 */
export function getCartItemCount() {
  if (typeof window === "undefined") {
    return 0;
  }

  const items = readCartItems();
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total = total + items[i].quantity;
  }

  return total;
}
