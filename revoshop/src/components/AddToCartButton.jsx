"use client";

import { Check, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {

  const { addToCart, cartNotification } = useCart();

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    addToCart(product);
  };

  return (
    <div>
      <Button onClick={handleAddToCart} className="gap-2">
        <ShoppingCart aria-hidden="true" className="size-4" />
        Add to Cart
      </Button>

      {cartNotification &&

      <Badge className="mt-3 gap-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
          <Check aria-hidden="true" className="size-3.5" />
          {cartNotification}
        </Badge>
      }
    </div>);

}
