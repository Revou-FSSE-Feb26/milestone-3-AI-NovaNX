import { mockCategories } from "@/data/mockCategories";
import { mockProducts } from "@/data/mockProducts";

const BASE_URL = "https://api.escuelajs.co/api/v1";

const OVERRIDES_STORAGE_KEY = "revoshop:product-overrides";
const CATEGORIES_CACHE_KEY = "revoshop:categories-cache";
const PRODUCT_DATA_SOURCE_STORAGE_KEY = "revoshop:product-data-source";

export const PRODUCTS_UPDATED_EVENT = "products-updated";
export const PRODUCT_DATA_SOURCE_UPDATED_EVENT = "product-data-source-updated";
export const PRODUCT_DATA_SOURCES = {
  PLATZI: "platzi",
  MOCK: "mock"
};








function normalizeProduct(product) {
  const source = product && typeof product === "object" ? product : {};
  const sourceImages = Array.isArray(source.images) ?
  source.images.filter((image) => typeof image === "string" && image.trim()) :
  [source.image].filter((image) => typeof image === "string" && image.trim());
  const category = normalizeCategory(source.category);
  const images =
  sourceImages.length > 0 ?
  sourceImages :
  [category.image].filter((image) => typeof image === "string" && image.trim());
  const productName =
  typeof source.title === "string" && source.title.trim() ?
  source.title :
  typeof source.name === "string" && source.name.trim() ?
  source.name :
  "Untitled product";

  return {
    ...source,
    id: source.id,
    title: productName,
    name: productName,
    price: Number.isFinite(Number(source.price)) ? Number(source.price) : 0,
    description:
    typeof source.description === "string" && source.description.trim() ?
    source.description :
    "No description available.",
    category,
    image: images[0] || "",
    images
  };
}

function normalizeCategory(category) {
  if (!category || typeof category !== "object") {
    return { id: null, name: "Uncategorized", image: "" };
  }

  return {
    id: category.id ?? null,
    name:
    typeof category.name === "string" && category.name.trim() ?
    category.name :
    "Uncategorized",
    image:
    typeof category.image === "string" && category.image.trim() ?
    category.image :
    ""
  };
}

function isValidCategory(category) {
  return category?.name !== "Uncategorized";
}

function isValidProduct(product) {
  return product?.id !== undefined && isValidCategory(product.category);
}

function normalizeProducts(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map(normalizeProduct).filter(isValidProduct);
}

function normalizeCategories(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map(normalizeCategory).filter(isValidCategory);
}

function isBrowser() {
  return typeof window !== "undefined";
}

export function getProductDataSource() {
  if (!isBrowser()) {
    return PRODUCT_DATA_SOURCES.PLATZI;
  }

  const source = window.localStorage.getItem(PRODUCT_DATA_SOURCE_STORAGE_KEY);
  return Object.values(PRODUCT_DATA_SOURCES).includes(source) ?
  source :
  PRODUCT_DATA_SOURCES.PLATZI;
}

export function setProductDataSource(source) {
  if (!isBrowser()) {
    return;
  }

  const nextSource = Object.values(PRODUCT_DATA_SOURCES).includes(source) ?
  source :
  PRODUCT_DATA_SOURCES.PLATZI;

  window.localStorage.setItem(PRODUCT_DATA_SOURCE_STORAGE_KEY, nextSource);
  window.dispatchEvent(new Event(PRODUCT_DATA_SOURCE_UPDATED_EVENT));
  window.dispatchEvent(new Event(PRODUCTS_UPDATED_EVENT));
}

function emptyOverrides() {
  return { created: [], updated: {}, deleted: [] };
}

function readOverrides() {
  if (!isBrowser()) return emptyOverrides();

  try {
    const raw = window.localStorage.getItem(OVERRIDES_STORAGE_KEY);
    if (!raw) return emptyOverrides();

    const parsed = JSON.parse(raw);
    return {
      created: Array.isArray(parsed.created) ? parsed.created : [],
      updated:
      parsed.updated && typeof parsed.updated === "object" ?
      parsed.updated :
      {},
      deleted: Array.isArray(parsed.deleted) ? parsed.deleted : []
    };
  } catch {
    return emptyOverrides();
  }
}

function writeOverrides(overrides) {
  if (!isBrowser()) return;

  window.localStorage.setItem(OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
  window.dispatchEvent(new Event(PRODUCTS_UPDATED_EVENT));
}

function readCachedCategories() {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(CATEGORIES_CACHE_KEY);
    return normalizeCategories(raw ? JSON.parse(raw) : []);
  } catch {
    return [];
  }
}

function writeCachedCategories(categories) {
  if (!isBrowser()) return;

  window.localStorage.setItem(CATEGORIES_CACHE_KEY, JSON.stringify(categories));
}

function isLocalId(id) {
  return typeof id === "string" && id.startsWith("local-");
}

function resolveCategory(categoryId, categories) {
  const id = Number(categoryId);
  const match = categories.find((category) => category.id === id);
  return isValidCategory(match) ? match : { id, name: "Uncategorized", image: "" };
}

function applyUpdate(product, overrides) {
  const patch = overrides.updated[product.id];
  if (!patch) return product;
  return { ...product, ...patch };
}

function buildProductFromPayload(payload, categories, base = {}) {
  const category = resolveCategory(payload.categoryId, categories);
  const images =
  payload.images.length > 0 ?
  payload.images :
  [category.image].filter((image) => typeof image === "string" && image.trim());

  return {
    ...base,
    title: payload.title,
    name: payload.title,
    price: payload.price,
    description: payload.description,
    category,
    image: images[0] || "",
    images,
    updatedAt: new Date().toISOString()
  };
}

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });

  if (!response.ok) {
    const message = await response.
    json().
    then((body) => body?.message).
    catch(() => null);
    throw new Error(message || `Request failed: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function readSourceProducts() {
  if (getProductDataSource() === PRODUCT_DATA_SOURCES.MOCK) {
    return mockProducts;
  }

  return request("/products?offset=0&limit=200");
}

async function readSourceCategories() {
  if (getProductDataSource() === PRODUCT_DATA_SOURCES.MOCK) {
    return mockCategories;
  }

  return request("/categories");
}

function findMockProductById(id) {
  return mockProducts.find((product) => String(product.id) === String(id));
}

export async function getProducts() {

  const remote = await readSourceProducts();
  const overrides = readOverrides();
  const deletedIds = new Set(overrides.deleted);

  const merged = (Array.isArray(remote) ? remote : []).
  filter((product) => !deletedIds.has(product.id)).
  map((product) => applyUpdate(product, overrides));

  return normalizeProducts([...overrides.created, ...merged]);
}

export async function getProductById(id) {
  const overrides = readOverrides();

  if (isLocalId(id)) {

    const local = overrides.created.find((product) => product.id === id);
    if (!local) throw new Error("Product not found");
    return normalizeProduct(local);
  }

  const numericId = Number(id);
  if (overrides.deleted.includes(numericId)) {
    throw new Error("Product not found");
  }


  const remote = await request(`/products/${id}`).catch((error) => {
    const mockProduct = findMockProductById(id);
    if (mockProduct) {
      return mockProduct;
    }

    throw error;
  });
  const product = normalizeProduct(applyUpdate(remote, overrides));

  if (!isValidProduct(product)) {
    throw new Error("Product not found");
  }

  return product;
}

export async function getCategories() {
  const data = await readSourceCategories();
  const categories = normalizeCategories(data);
  writeCachedCategories(categories);
  return categories;
}

export async function createProduct(payload) {
  const categories = readCachedCategories();
  const product = buildProductFromPayload(payload, categories, {
    id: `local-${Date.now()}`,
    creationAt: new Date().toISOString()
  });

  const overrides = readOverrides();
  overrides.created = [product, ...overrides.created];
  writeOverrides(overrides);

  return product;
}

export async function updateProduct(id, payload) {
  const categories = readCachedCategories();
  const overrides = readOverrides();

  if (isLocalId(id)) {
    const index = overrides.created.findIndex((product) => product.id === id);
    if (index === -1) throw new Error("Product not found");

    const updated = buildProductFromPayload(
      payload,
      categories,
      overrides.created[index]
    );
    overrides.created[index] = updated;
    writeOverrides(overrides);
    return updated;
  }

  const numericId = Number(id);
  const patch = buildProductFromPayload(payload, categories, {
    id: numericId
  });

  overrides.updated[numericId] = {
    ...(overrides.updated[numericId] || {}),
    ...patch
  };
  writeOverrides(overrides);

  return overrides.updated[numericId];
}

export async function deleteProduct(id) {
  const overrides = readOverrides();

  if (isLocalId(id)) {
    overrides.created = overrides.created.filter(
      (product) => product.id !== id
    );
  } else {
    const numericId = Number(id);
    if (!overrides.deleted.includes(numericId)) {
      overrides.deleted.push(numericId);
    }
    delete overrides.updated[numericId];
  }

  writeOverrides(overrides);
  return null;
}

export function getOverridesSummary() {
  const overrides = readOverrides();
  return {
    created: overrides.created.length,
    updated: Object.keys(overrides.updated).length,
    deleted: overrides.deleted.length
  };
}

export function clearLocalOverrides() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(OVERRIDES_STORAGE_KEY);
  window.dispatchEvent(new Event(PRODUCTS_UPDATED_EVENT));
}
