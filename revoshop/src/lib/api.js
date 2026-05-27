const BASE_URL = "https://api.escuelajs.co/api/v1";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products?offset=0&limit=200`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}
