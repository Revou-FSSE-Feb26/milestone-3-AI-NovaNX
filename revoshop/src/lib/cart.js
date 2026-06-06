export const CART_STORAGE_KEY = "revoshop-cart";
export const PRODUCT_VOUCHER_STORAGE_KEY = "revoshop-product-voucher";
export const SHIPPING_VOUCHER_STORAGE_KEY = "revoshop-shipping-voucher";
export const LEGACY_VOUCHER_STORAGE_KEY = "revoshop-voucher";

export const CART_UPDATED_EVENT = "cart-updated";
export const VOUCHER_UPDATED_EVENT = "voucher-updated";

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
  "kitchen accessories": "Furniture"
};

function normalizeCategoryKey(category) {
  return String(category || "").
  trim().
  toLowerCase().
  replace(/[^a-z0-9]+/g, " ");
}

export function normalizeCartCategory(category) {
  const categoryKey = normalizeCategoryKey(category);

  if (!categoryKey) {
    return "Product";
  }

  return CATEGORY_ALIASES[categoryKey] || categoryKey;
}

export function isVoucherCategoryEligible(itemCategory, voucherCategory) {
  if (voucherCategory === "All") {
    return true;
  }

  return (
    normalizeCartCategory(itemCategory) === normalizeCartCategory(voucherCategory));

}

export function readCartItems() {
  if (typeof window === "undefined") {
    return [];
  }

  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
}

export function writeCartItems(items) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function getCartItemCount() {
  if (typeof window === "undefined") {
    return 0;
  }
  return readCartItems().reduce((total, item) => total + item.quantity, 0);
}
