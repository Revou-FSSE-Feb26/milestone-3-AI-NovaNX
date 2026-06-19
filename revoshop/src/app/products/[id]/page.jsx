"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import AddToCartButton from "@/components/AddToCartButton";
import { getProductById } from "@/lib/api";
import { cleanImageUrl } from "@/lib/utils";

function ProductDetailSkeleton() {
  return (
    <main
      className="min-h-screen px-6 py-10"
      aria-busy="true"
      aria-label="Loading product details"
    >
      <section className="mx-auto grid max-w-6xl animate-pulse gap-10 md:grid-cols-2">
        <div className="h-105 rounded-xl bg-muted" />

        <div>
          <div className="h-4 w-32 rounded bg-muted" />
          <div className="mt-6 h-4 w-24 rounded bg-muted" />
          <div className="mt-3 h-9 w-3/4 rounded bg-muted" />
          <div className="mt-4 h-8 w-28 rounded bg-muted" />

          <div className="mt-6 space-y-3">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-2/3 rounded bg-muted" />
          </div>

          <div className="mt-8 h-9 w-36 rounded-lg bg-muted" />
        </div>
      </section>
    </main>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to load product.",
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (error) {
    return <p className="p-8 text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="p-8">Product not found.</p>;
  }

  const imageUrl = cleanImageUrl(product.images?.[0]);
  const productName = product.name || product.title;

  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div className="relative h-105 overflow-hidden rounded-xl border bg-muted">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={productName}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
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

          <h1 className="mt-2 text-3xl font-bold">{productName}</h1>

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
