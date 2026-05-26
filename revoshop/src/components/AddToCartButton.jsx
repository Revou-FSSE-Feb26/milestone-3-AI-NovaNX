"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddToCartButton() {
  const [added, setAdded] = useState(false);

  return (
    <div>
      <Button onClick={() => setAdded(true)}>Add to Cart</Button>

      {added && (
        <p className="mt-3 text-sm text-green-600">Product added to cart.</p>
      )}
    </div>
  );
}
