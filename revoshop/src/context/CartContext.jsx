"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

import {
  CART_STORAGE_KEY,
  LEGACY_VOUCHER_STORAGE_KEY,
  PRODUCT_VOUCHER_STORAGE_KEY,
  SHIPPING_VOUCHER_STORAGE_KEY,
  normalizeCartCategory,
} from "@/lib/cart";
import { cleanImageUrl } from "@/lib/utils";

const CartContext = createContext(null);

const ACTIONS = {
  LOAD: "LOAD_STORED_STATE",
  ADD: "ADD_ITEM",
  REMOVE: "REMOVE_ITEM",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  APPLY_PRODUCT_VOUCHER: "APPLY_PRODUCT_VOUCHER",
  APPLY_SHIPPING_VOUCHER: "APPLY_SHIPPING_VOUCHER",
  REMOVE_PRODUCT_VOUCHER: "REMOVE_PRODUCT_VOUCHER",
  REMOVE_SHIPPING_VOUCHER: "REMOVE_SHIPPING_VOUCHER",
  CLEAR_CHECKOUT: "CLEAR_CHECKOUT",
  CLEAR_NOTIFICATION: "CLEAR_NOTIFICATION",
};

const STORAGE_KEYS = [
  CART_STORAGE_KEY,
  PRODUCT_VOUCHER_STORAGE_KEY,
  SHIPPING_VOUCHER_STORAGE_KEY,
  LEGACY_VOUCHER_STORAGE_KEY,
];

const INITIAL_STATE = {
  cartItems: [],
  selectedProductVoucher: null,
  selectedShippingVoucher: null,
  cartNotification: "",
  hydrated: false,
};

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function readVoucher(key, discountType) {
  const currentVoucher = readStorage(key, null);
  const legacyVoucher = readStorage(LEGACY_VOUCHER_STORAGE_KEY, null);

  return (
    currentVoucher ||
    (legacyVoucher?.discountType === discountType ? legacyVoucher : null)
  );
}

function readStoredState() {
  return {
    cartItems: readStorage(CART_STORAGE_KEY, []),
    selectedProductVoucher: readVoucher(
      PRODUCT_VOUCHER_STORAGE_KEY,
      "percentage",
    ),
    selectedShippingVoucher: readVoucher(
      SHIPPING_VOUCHER_STORAGE_KEY,
      "free-shipping",
    ),
  };
}

function persistValue(key, value) {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.removeItem(key);
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOAD:
      return { ...state, ...action.payload, hydrated: true };

    case ACTIONS.ADD: {
      const exists = state.cartItems.some(
        (item) => item.id === action.payload.id,
      );
      const cartItems = exists
        ? state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.cartItems, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        cartItems,
        cartNotification: "Product added to cart.",
      };
    }

    case ACTIONS.REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        ),
      };

    case ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };

    case ACTIONS.CLEAR_CART:
      return { ...state, cartItems: [] };

    case ACTIONS.APPLY_PRODUCT_VOUCHER:
      return { ...state, selectedProductVoucher: action.payload };

    case ACTIONS.APPLY_SHIPPING_VOUCHER:
      return { ...state, selectedShippingVoucher: action.payload };

    case ACTIONS.REMOVE_PRODUCT_VOUCHER:
      return { ...state, selectedProductVoucher: null };

    case ACTIONS.REMOVE_SHIPPING_VOUCHER:
      return { ...state, selectedShippingVoucher: null };

    case ACTIONS.CLEAR_CHECKOUT:
      return {
        ...state,
        cartItems: [],
        selectedProductVoucher: null,
        selectedShippingVoucher: null,
      };

    case ACTIONS.CLEAR_NOTIFICATION:
      return { ...state, cartNotification: "" };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const notificationTimeoutRef = useRef(null);

  const loadStoredState = useCallback(() => {
    dispatch({ type: ACTIONS.LOAD, payload: readStoredState() });
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(loadStoredState, 0);

    function handleStorage(event) {
      if (!event.key || STORAGE_KEYS.includes(event.key)) {
        loadStoredState();
      }
    }

    window.addEventListener("storage", handleStorage);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("storage", handleStorage);
    };
  }, [loadStoredState]);

  useEffect(() => {
    if (!state.hydrated) return;

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cartItems));
    persistValue(
      PRODUCT_VOUCHER_STORAGE_KEY,
      state.selectedProductVoucher,
    );
    persistValue(
      SHIPPING_VOUCHER_STORAGE_KEY,
      state.selectedShippingVoucher,
    );
    localStorage.removeItem(LEGACY_VOUCHER_STORAGE_KEY);
  }, [
    state.cartItems,
    state.hydrated,
    state.selectedProductVoucher,
    state.selectedShippingVoucher,
  ]);

  useEffect(
    () => () => {
      if (notificationTimeoutRef.current) {
        window.clearTimeout(notificationTimeoutRef.current);
      }
    },
    [],
  );

  const addToCart = useCallback((product) => {
    if (!product) return;

    dispatch({
      type: ACTIONS.ADD,
      payload: {
        id: product.id,
        title: product.name || product.title,
        price: product.price,
        category: normalizeCartCategory(product.category?.name),
        image: cleanImageUrl(product.image || product.images?.[0]),
      },
    });

    window.clearTimeout(notificationTimeoutRef.current);
    notificationTimeoutRef.current = window.setTimeout(
      () => dispatch({ type: ACTIONS.CLEAR_NOTIFICATION }),
      2000,
    );
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } });
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({ type: ACTIONS.REMOVE, payload: { id } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  }, []);

  const applyVoucher = useCallback((voucher) => {
    dispatch({
      type:
        voucher.discountType === "free-shipping"
          ? ACTIONS.APPLY_SHIPPING_VOUCHER
          : ACTIONS.APPLY_PRODUCT_VOUCHER,
      payload: voucher,
    });
  }, []);

  const removeProductVoucher = useCallback(() => {
    dispatch({ type: ACTIONS.REMOVE_PRODUCT_VOUCHER });
  }, []);

  const removeShippingVoucher = useCallback(() => {
    dispatch({ type: ACTIONS.REMOVE_SHIPPING_VOUCHER });
  }, []);

  const clearCheckout = useCallback(() => {
    dispatch({ type: ACTIONS.CLEAR_CHECKOUT });
  }, []);

  const cartItemCount = useMemo(
    () => state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [state.cartItems],
  );

  const cartTotal = useMemo(
    () =>
      state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      ),
    [state.cartItems],
  );

  const value = useMemo(
    () => ({
      cartItems: state.cartItems,
      cartItemCount,
      cartTotal,
      cartNotification: state.cartNotification,
      selectedProductVoucher: state.selectedProductVoucher,
      selectedShippingVoucher: state.selectedShippingVoucher,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      applyVoucher,
      removeProductVoucher,
      removeShippingVoucher,
      clearCheckout,
    }),
    [
      state.cartItems,
      state.cartNotification,
      state.selectedProductVoucher,
      state.selectedShippingVoucher,
      cartItemCount,
      cartTotal,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      applyVoucher,
      removeProductVoucher,
      removeShippingVoucher,
      clearCheckout,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside a <CartProvider>.");
  }

  return context;
}
