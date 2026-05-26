"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductById } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (loading) {
    return <p className="p-8">Loading product detail...</p>;
  }

  if (error) {
    return <p className="p-8 text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="p-8">Product not found.</p>;
  }

  let imageUrl = product.images?.[0] || "";
  if (typeof imageUrl === "string") {
    imageUrl = imageUrl.replace(/["\[\]]/g, "").trim();
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div className="relative h-105 overflow-hidden rounded-xl border bg-muted">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={product.title}
              fill
              className="object-cover"
              unoptimized
            />
          )}
        </div>

        <div>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:underline"
          >
            Back to products
          </Link>

          <p className="mt-6 text-sm text-muted-foreground">
            {product.category?.name}
          </p>

          <h1 className="mt-2 text-3xl font-bold">{product.title}</h1>

          <p className="mt-4 text-2xl font-bold">${product.price}</p>

          <p className="mt-6 leading-7 text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
        </div>
      </section>
    </main>
  );
}
