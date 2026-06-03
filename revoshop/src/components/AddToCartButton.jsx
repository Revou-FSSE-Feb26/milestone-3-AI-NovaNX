"use client";

import { useEffect, useState } from "react";
import { Check, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cleanImageUrl } from "@/lib/utils";
import { normalizeCartCategory, readCartItems, writeCartItems } from "@/lib/cart";

const ADDED_FEEDBACK_DURATION_MS = 2000;

export default function AddToCartButton({ product }) {
  // Jika tombol Add to Cart diklik: ubah state cart/message.
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) {
      return;
    }

    const timeoutId = setTimeout(
      () => setAdded(false),
      ADDED_FEEDBACK_DURATION_MS,
    );

    return () => clearTimeout(timeoutId);
  }, [added]);

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    const cartItems = readCartItems();
    const existingItem = cartItems.find((item) => item.id === product.id);

    const updatedCart = existingItem
      ? cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [
          ...cartItems,
          {
            id: product.id,
            title: product.name || product.title,
            price: product.price,
            category: normalizeCartCategory(product.category?.name),
            image: cleanImageUrl(product.image || product.images?.[0]),
            quantity: 1,
          },
        ];

    writeCartItems(updatedCart);
    setAdded(true);
  };

  return (
    <div>
      <Button onClick={handleAddToCart} className="gap-2">
        <ShoppingCart aria-hidden="true" className="size-4" />
        Add to Cart
      </Button>

      {added && (
        // Tampilkan pesan "Product added to cart".
        <Badge className="mt-3 gap-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
          <Check aria-hidden="true" className="size-3.5" />
          Product added to cart.
        </Badge>
      )}
    </div>
  );
}
