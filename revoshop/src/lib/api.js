const BASE_URL = "https://api.escuelajs.co/api/v1";

export async function getProducts() {
  // Ambil lebih banyak produk untuk mendapatkan variasi kategori
  const response = await fetch(`${BASE_URL}/products?offset=0&limit=200`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const allProducts = await response.json();

  // Group produk berdasarkan kategori
  const productsByCategory = new Map();

  for (const product of allProducts) {
    const categoryId = product.category?.id;
    if (!categoryId) continue;

    if (!productsByCategory.has(categoryId)) {
      productsByCategory.set(categoryId, []);
    }
    productsByCategory.get(categoryId).push(product);
  }

  // Ambil 2 produk dari setiap kategori sampai dapat 12 produk
  const diverseProducts = [];

  for (const [categoryId, products] of productsByCategory) {
    // Ambil maksimal 2 produk per kategori
    const productsToAdd = products.slice(0, 2);
    diverseProducts.push(...productsToAdd);

    // Stop jika sudah dapat 12 produk atau lebih
    if (diverseProducts.length >= 12) break;
  }

  return diverseProducts.slice(0, 12);
}

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
