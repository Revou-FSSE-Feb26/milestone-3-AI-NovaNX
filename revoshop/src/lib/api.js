import { mockCategories } from "@/data/mockCategories";
import { mockProducts } from "@/data/mockProducts";
import { fetchWithRetry } from "@/lib/fetch-with-retry";

// ============================================================
// KONFIGURASI DASAR
// ============================================================

// Endpoint API internal Next.js (lihat folder: app/api/products/)
const API_BASE = "/api/products";

// URL untuk mengambil daftar kategori dari API Platzi Fake Store
const PLATZI_CATEGORIES_URL = "https://api.escuelajs.co/api/v1/categories";
const PLATZI_PRODUCTS_URL = "https://api.escuelajs.co/api/v1/products";

// Nama kunci untuk menyimpan pilihan sumber data di localStorage
const DATA_SOURCE_KEY = "revoshop:product-data-source";

// ============================================================
// KONSTANTA SUMBER DATA
// Digunakan untuk memilih antara data lokal atau API Platzi
// ============================================================

export const PRODUCT_DATA_SOURCES = {
  PLATZI: "platzi", // Menggunakan API Platzi Fake Store (eksternal)
  MOCK: "mock", // Menggunakan data lokal dari file mockProducts.js
};

// ============================================================
// DATA MOCK (simulasi database di memory)
// Ini adalah salinan dari mockProducts.js yang bisa diubah
// saat aplikasi berjalan (create, update, delete)
// ============================================================

let mockStore = mockProducts.map(function (product) {
  // Buat salinan setiap produk agar tidak mengubah data aslinya
  return { ...product };
});

// ============================================================
// SUMBER DATA: baca dan simpan pilihan pengguna
// ============================================================

/**
 * Membaca pilihan sumber data yang tersimpan di localStorage.
 * Jika belum pernah dipilih, default-nya adalah PLATZI.
 */
export function getProductDataSource() {
  // localStorage hanya tersedia di browser, bukan di server (Next.js SSR)
  if (typeof window === "undefined") {
    return PRODUCT_DATA_SOURCES.PLATZI;
  }

  const savedSource = localStorage.getItem(DATA_SOURCE_KEY);

  if (savedSource === PRODUCT_DATA_SOURCES.MOCK) {
    return PRODUCT_DATA_SOURCES.MOCK;
  }

  return PRODUCT_DATA_SOURCES.PLATZI;
}

/**
 * Menyimpan pilihan sumber data ke localStorage,
 * sehingga pilihan tetap ada saat halaman di-refresh.
 */
export function setProductDataSource(source) {
  // localStorage hanya tersedia di browser, bukan di server (Next.js SSR)
  if (typeof window === "undefined") {
    return;
  }

  if (source === PRODUCT_DATA_SOURCES.MOCK) {
    localStorage.setItem(DATA_SOURCE_KEY, PRODUCT_DATA_SOURCES.MOCK);
  } else {
    localStorage.setItem(DATA_SOURCE_KEY, PRODUCT_DATA_SOURCES.PLATZI);
  }
}

// ============================================================
// FUNGSI PEMBANTU (HELPER) — hanya digunakan untuk mode MOCK
// ============================================================

/**
 * Mencari data kategori berdasarkan ID dari daftar mockCategories.
 * Mengembalikan null jika kategori tidak ditemukan.
 */
function findCategoryById(categoryId) {
  for (let i = 0; i < mockCategories.length; i++) {
    if (Number(mockCategories[i].id) === Number(categoryId)) {
      return mockCategories[i];
    }
  }
  return null;
}

function findMockProductById(id) {
  return mockStore.find((product) => Number(product.id) === Number(id)) || null;
}

/**
 * Membuat objek produk baru dari data form.
 * Digunakan saat create dan update produk di mode MOCK.
 *
 * - formData : data yang dikirim dari form (title, price, dll)
 * - existingId: ID yang sudah ada (dipakai saat update agar ID tidak berubah)
 */
function makeProductFromForm(formData, existingId) {
  // Gunakan ID yang sudah ada, atau buat ID baru dari timestamp
  const id = existingId !== undefined ? existingId : Date.now();

  // Cari objek kategori berdasarkan ID yang dipilih dari form
  const category = findCategoryById(formData.categoryId);

  // Tentukan gambar produk
  let images;
  if (formData.images && formData.images.length > 0) {
    images = formData.images;
  } else {
    // Gunakan gambar placeholder jika tidak ada gambar yang diisi
    images = ["https://placehold.co/600x400"];
  }

  return {
    id: id,
    title: formData.title,
    name: formData.title,
    description: formData.description,
    price: Number(formData.price),
    category: category,
    images: images,
    image: images[0],
  };
}

// ============================================================
// FUNGSI API: KATEGORI
// ============================================================

/**
 * Mengambil semua kategori.
 * - Mode MOCK  : kembalikan data dari mockCategories.js
 * - Mode PLATZI: ambil dari API Platzi Fake Store
 */
export async function getCategories({ signal } = {}) {
  const source = getProductDataSource();

  if (source === PRODUCT_DATA_SOURCES.MOCK) {
    return mockCategories;
  }

  try {
    const response = await fetchWithRetry(PLATZI_CATEGORIES_URL, { signal });
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw error;
    }
  }

  if (mockCategories.length > 0) {
    return mockCategories;
  }

  throw new Error("Gagal mengambil kategori dari Platzi maupun mock data.");
}

// ============================================================
// FUNGSI API: PRODUK (CRUD)
// ============================================================

/**
 * 1. READ — Mengambil semua produk.
 * - Mode MOCK  : dari mockStore (data lokal di memory)
 * - Mode PLATZI: dari API internal Next.js (/api/products)
 */
export async function getProducts({ signal } = {}) {
  const source = getProductDataSource();

  if (source === PRODUCT_DATA_SOURCES.MOCK) {
    // Kembalikan salinan agar data asli mockStore tidak bisa diubah dari luar
    return mockStore.map(function (product) {
      return { ...product };
    });
  }

  try {
    const response = await fetch(API_BASE, { signal });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    if (error.name === "AbortError") {
      throw error;
    }
  }

  if (mockStore.length > 0) {
    return mockStore.map((product) => ({ ...product }));
  }

  throw new Error("Gagal mengambil produk dari Platzi maupun mock data.");
}

/**
 * 2. READ — Mengambil satu produk berdasarkan ID.
 */
export async function getProductById(id, { signal } = {}) {
  const source = getProductDataSource();

  if (source === PRODUCT_DATA_SOURCES.MOCK) {
    const found = findMockProductById(id);

    if (found === null) {
      throw new Error("Produk tidak ditemukan.");
    }

    return { ...found };
  }

  try {
    // Server Component memerlukan URL absolut. Di browser, request tetap
    // diarahkan melalui API Route internal agar satu origin.
    const productUrl =
      typeof window === "undefined"
        ? `${PLATZI_PRODUCTS_URL}/${id}`
        : `${API_BASE}/${id}`;
    const response =
      typeof window === "undefined"
        ? await fetchWithRetry(productUrl, {
            cache: "no-store",
            signal,
          })
        : await fetch(productUrl, {
            cache: "no-store",
            signal,
          });

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw error;
    }

    // Jika Platzi sedang bermasalah, lanjutkan ke fallback mock.
  }

  const fallbackProduct = findMockProductById(id);

  if (fallbackProduct) {
    return { ...fallbackProduct };
  }

  throw new Error("Produk tidak ditemukan di Platzi maupun mock data.");
}

/**
 * 3. CREATE — Membuat produk baru.
 * Parameter payload berisi data dari form (title, price, dll).
 */
export async function createProduct(payload) {
  const source = getProductDataSource();

  if (source === PRODUCT_DATA_SOURCES.MOCK) {
    const newProduct = makeProductFromForm(payload);

    // Tambahkan produk baru di posisi pertama
    mockStore = [newProduct, ...mockStore];

    return { ...newProduct };
  }

  const response = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Gagal membuat produk baru.");
  }

  const data = await response.json();
  return data;
}

/**
 * 4. UPDATE — Memperbarui produk yang sudah ada.
 * - id     : ID produk yang akan diubah
 * - payload: data baru dari form
 */
export async function updateProduct(id, payload) {
  const source = getProductDataSource();

  if (source === PRODUCT_DATA_SOURCES.MOCK) {
    // Cari posisi (index) produk di mockStore
    let index = -1;

    for (let i = 0; i < mockStore.length; i++) {
      if (Number(mockStore[i].id) === Number(id)) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      throw new Error("Produk tidak ditemukan.");
    }

    // Buat versi terbaru, pertahankan ID yang lama
    const updatedProduct = makeProductFromForm(payload, mockStore[index].id);
    mockStore[index] = updatedProduct;

    return { ...updatedProduct };
  }

  const response = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Gagal memperbarui produk.");
  }

  const data = await response.json();
  return data;
}

/**
 * 5. DELETE — Menghapus produk berdasarkan ID.
 */
export async function deleteProduct(id) {
  const source = getProductDataSource();

  if (source === PRODUCT_DATA_SOURCES.MOCK) {
    const jumlahSebelum = mockStore.length;

    // Buat array baru tanpa produk yang ID-nya cocok
    mockStore = mockStore.filter(function (item) {
      return Number(item.id) !== Number(id);
    });

    if (mockStore.length === jumlahSebelum) {
      throw new Error("Produk tidak ditemukan.");
    }

    return null;
  }

  const response = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Gagal menghapus produk.");
  }

  return null;
}
