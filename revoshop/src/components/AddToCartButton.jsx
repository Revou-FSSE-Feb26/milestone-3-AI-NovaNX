"use client";

import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CART_STORAGE_KEY = "revoshop-cart";

function cleanImageUrl(imageUrl) {
  if (typeof imageUrl !== "string") {
    return "";
  }

  return imageUrl.replace(/["\[\]]/g, "").trim();
}

export default function AddToCartButton({ product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    const cartItems = JSON.parse(
      localStorage.getItem(CART_STORAGE_KEY) || "[]",
    );
    const existingItem = cartItems.find((item) => item.id === product.id);

    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      updatedCart = [
        ...cartItems,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category?.name || "Product",
          image: cleanImageUrl(product.images?.[0]),
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart-updated"));
    setAdded(true);
  };

  return (
    <div>
      <Button onClick={handleAddToCart} className="gap-2">
        <ShoppingCart aria-hidden="true" className="size-4" />
        Add to Cart
      </Button>

      {added && (
        <Badge className="mt-3 gap-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
          <Check aria-hidden="true" className="size-3.5" />
          Product added to cart.
        </Badge>
      )}
    </div>
  );
}
