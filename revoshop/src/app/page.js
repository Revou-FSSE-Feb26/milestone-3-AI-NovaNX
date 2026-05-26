"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

export default function HomePage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase().trim() || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchQuery) {
      return products;
    }

    return products.filter((product) => {
      const searchableText = [
        product.title,
        product.description,
        product.category?.name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchQuery);
    });
  }, [products, searchQuery]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <p className="p-8">Loading products...</p>;
  }

  if (error) {
    return <p className="p-8 text-red-500">{error}</p>;
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">RevoShop</h1>
          <p className="mt-2 text-muted-foreground">
            {searchQuery
              ? `Search results for "${searchParams.get("search")}"`
              : "Browse our latest products from Platzi Fake Store API."}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border bg-background p-8 text-center">
            <p className="text-lg font-semibold">No products found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try searching with another product name or category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
