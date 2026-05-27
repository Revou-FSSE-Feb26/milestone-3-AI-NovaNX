export const CART_STORAGE_KEY = "revoshop-cart";
export const PRODUCT_VOUCHER_STORAGE_KEY = "revoshop-product-voucher";
export const SHIPPING_VOUCHER_STORAGE_KEY = "revoshop-shipping-voucher";
export const LEGACY_VOUCHER_STORAGE_KEY = "revoshop-voucher";

export const CART_UPDATED_EVENT = "cart-updated";
export const VOUCHER_UPDATED_EVENT = "voucher-updated";

export function readCartItems() {
  if (typeof window === "undefined") {
    return [];
  }

  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
}

export function writeCartItems(items) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function getCartItemCount() {
  return readCartItems().reduce((total, item) => total + item.quantity, 0);
}
