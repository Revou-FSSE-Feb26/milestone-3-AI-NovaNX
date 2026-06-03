"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Filter, PackageSearch, ShoppingBag } from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { readAuthSession } from "@/lib/auth";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase().trim() || "";

  const [authChecked, setAuthChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = useMemo(() => {
    const categoryMap = new Map();

    for (const product of products) {
      const categoryName = product.category?.name || "Uncategorized";
      categoryMap.set(categoryName, (categoryMap.get(categoryName) || 0) + 1);
    }

    return Array.from(categoryMap, ([name, count]) => ({ name, count })).sort(
      (firstCategory, secondCategory) =>
        firstCategory.name.localeCompare(secondCategory.name),
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryName = product.category?.name || "Uncategorized";
      const matchesCategory =
        selectedCategory === "all" || categoryName === selectedCategory;

      const searchableText = [
        product.title,
        product.description,
        product.category?.name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchQuery || searchableText.includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [products, searchQuery, selectedCategory]);

  useEffect(() => {
    queueMicrotask(() => {
      const session = readAuthSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      setAuthChecked(true);
    });
  }, [router]);

  useEffect(() => {
    if (!authChecked) {
      return;
    }

    async function loadProducts() {
      try {
        // Ambil semua data produk.
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [authChecked]);

  if (!authChecked || loading) {
    return <p className="p-8">Loading products...</p>;
  }

  if (error) {
    return <p className="p-8 text-red-500">{error}</p>;
  }

  return (
    // Tampilkan Home Page.
    <main className="min-h-screen bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Badge className="mb-3 gap-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
            <ShoppingBag aria-hidden="true" className="size-3.5" />
            Product Catalog
          </Badge>
          <h1 className="text-3xl font-bold">Our Catalog</h1>
          <p className="mt-2 text-muted-foreground">
            {searchQuery
              ? `Search results for "${searchParams.get("search")}"`
              : "Browse our latest products"}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="bg-background shadow-sm">
              <CardHeader>
                <Badge
                  variant="outline"
                  className="mb-2 w-fit gap-1.5 bg-muted/60"
                >
                  <Filter aria-hidden="true" className="size-3.5" />
                  Filter
                </Badge>
                <CardTitle>Categories</CardTitle>
                <CardDescription>
                  Choose a category to refine the product list.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                <Button
                  variant={selectedCategory === "all" ? "secondary" : "ghost"}
                  className="w-full justify-between"
                  onClick={() => setSelectedCategory("all")}
                >
                  <span>All Products</span>
                  <Badge variant="outline" className="bg-background">
                    {products.length}
                  </Badge>
                </Button>

                <Separator className="my-3" />

                <div className="grid gap-1">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={
                        selectedCategory === category.name
                          ? "secondary"
                          : "ghost"
                      }
                      className="w-full justify-between"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <span className="truncate">{category.name}</span>
                      <Badge variant="outline" className="bg-background">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          <div>
            <div className="mb-4 flex flex-col justify-between gap-3 rounded-lg border bg-background p-4 shadow-sm sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold">
                  {selectedCategory === "all"
                    ? "All Products"
                    : selectedCategory}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length}{" "}
                  products
                </p>
              </div>

              {selectedCategory !== "all" && (
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory("all")}
                >
                  Reset Filter
                </Button>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {/* Untuk setiap produk. */}
                {filteredProducts.map((product, index) => (
                  // Tampilkan image, nama produk, harga, dan tombol/link "View Detail".
                  <ProductCard
                    key={product.id}
                    product={product}
                    priority={index < 3}
                  />
                ))}
              </div>
            ) : (
              <Card className="bg-background text-center shadow-sm">
                <CardContent className="py-10">
                  <PackageSearch
                    aria-hidden="true"
                    className="mx-auto size-10 text-muted-foreground"
                  />
                  <p className="mt-4 text-lg font-semibold">
                    No products found
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try searching with another product name or category.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    // Tampilkan Home Page.
    <Suspense fallback={<p className="p-8">Loading products...</p>}>
      <HomeContent />
    </Suspense>
  );
}
