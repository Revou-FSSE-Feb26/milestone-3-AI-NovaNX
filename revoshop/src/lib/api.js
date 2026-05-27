const BASE_URL = "https://api.escuelajs.co/api/v1";

const OVERRIDES_STORAGE_KEY = "revoshop:product-overrides";
const CATEGORIES_CACHE_KEY = "revoshop:categories-cache";

export const PRODUCTS_UPDATED_EVENT = "products-updated";

function isBrowser() {
  return typeof window !== "undefined";
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
        parsed.updated && typeof parsed.updated === "object"
          ? parsed.updated
          : {},
      deleted: Array.isArray(parsed.deleted) ? parsed.deleted : [],
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
    return raw ? JSON.parse(raw) : [];
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
  return match || { id, name: "Uncategorized", image: "" };
}

function applyUpdate(product, overrides) {
  const patch = overrides.updated[product.id];
  if (!patch) return product;
  return { ...product, ...patch };
}

function buildProductFromPayload(payload, categories, base = {}) {
  return {
    ...base,
    title: payload.title,
    price: payload.price,
    description: payload.description,
    category: resolveCategory(payload.categoryId, categories),
    images: payload.images,
    updatedAt: new Date().toISOString(),
  };
}

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });

  if (!response.ok) {
    const message = await response
      .json()
      .then((body) => body?.message)
      .catch(() => null);
    throw new Error(message || `Request failed: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export async function getProducts() {
  const remote = await request("/products?offset=0&limit=200");
  const overrides = readOverrides();
  const deletedIds = new Set(overrides.deleted);

  const merged = remote
    .filter((product) => !deletedIds.has(product.id))
    .map((product) => applyUpdate(product, overrides));

  return [...overrides.created, ...merged];
}

export async function getProductById(id) {
  const overrides = readOverrides();

  if (isLocalId(id)) {
    const local = overrides.created.find((product) => product.id === id);
    if (!local) throw new Error("Product not found");
    return local;
  }

  const numericId = Number(id);
  if (overrides.deleted.includes(numericId)) {
    throw new Error("Product not found");
  }

  const remote = await request(`/products/${id}`);
  return applyUpdate(remote, overrides);
}

export async function getCategories() {
  const data = await request("/categories");
  writeCachedCategories(data);
  return data;
}

export async function createProduct(payload) {
  const categories = readCachedCategories();
  const product = buildProductFromPayload(payload, categories, {
    id: `local-${Date.now()}`,
    creationAt: new Date().toISOString(),
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
      overrides.created[index],
    );
    overrides.created[index] = updated;
    writeOverrides(overrides);
    return updated;
  }

  const numericId = Number(id);
  const patch = buildProductFromPayload(payload, categories, {
    id: numericId,
  });

  overrides.updated[numericId] = {
    ...(overrides.updated[numericId] || {}),
    ...patch,
  };
  writeOverrides(overrides);

  return overrides.updated[numericId];
}

export async function deleteProduct(id) {
  const overrides = readOverrides();

  if (isLocalId(id)) {
    overrides.created = overrides.created.filter(
      (product) => product.id !== id,
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
    deleted: overrides.deleted.length,
  };
}

export function clearLocalOverrides() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(OVERRIDES_STORAGE_KEY);
  window.dispatchEvent(new Event(PRODUCTS_UPDATED_EVENT));
}
