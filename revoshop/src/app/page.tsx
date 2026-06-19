"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
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
  CardTitle } from
"@/components/ui/card";
import { Separator } from "@/components/ui/separator";


type ProductCategory = {
  id?: number | string;
  name?: string;
  image?: string;
};

type Product = {
  id: number | string;
  title?: string;
  name?: string;
  description?: string;
  category?: ProductCategory | null;
  image?: string;
  images?: string[];
  price?: number;
};

type CategoryFilter = {
  name: string;
  count: number;
};


function isProductArray(data: unknown): data is Product[] {
  return Array.isArray(data);
}

function HomeSkeleton() {
  return (
    <main
      className="min-h-screen bg-muted/30 px-4 py-8 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-label="Loading product catalog"
    >
      <section className="mx-auto max-w-7xl animate-pulse">
        <div className="mb-8">
          <div className="h-6 w-36 rounded-full bg-muted" />
          <div className="mt-3 h-9 w-52 rounded bg-muted" />
          <div className="mt-2 h-5 w-64 rounded bg-muted" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside>
            <Card className="bg-background shadow-sm">
              <CardHeader className="">
                <div className="h-6 w-20 rounded-full bg-muted" />
                <div className="h-6 w-32 rounded bg-muted" />
                <div className="h-4 w-full rounded bg-muted" />
              </CardHeader>
              <CardContent className="space-y-3">
                {Array.from({ length: 5 }, (_, index) => (
                  <div
                    key={index}
                    className="h-8 w-full rounded-md bg-muted"
                  />
                ))}
              </CardContent>
            </Card>
          </aside>

          <div>
            <div className="mb-4 rounded-lg border bg-background p-4 shadow-sm">
              <div className="h-5 w-32 rounded bg-muted" />
              <div className="mt-2 h-4 w-44 rounded bg-muted" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }, (_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-56 w-full bg-muted" />
                  <CardHeader className="">
                    <div className="h-5 w-24 rounded-full bg-muted" />
                    <div className="h-6 w-3/4 rounded bg-muted" />
                  </CardHeader>
                  <CardContent className="">
                    <div className="h-7 w-24 rounded bg-muted" />
                  </CardContent>
                  <div className="px-6 pb-6">
                    <div className="h-9 w-full rounded-md bg-muted" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


function HomeContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase().trim() || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const categories = useMemo<CategoryFilter[]>(() => {
    const categoryMap = new Map<string, number>();

    for (const product of products) {
      const categoryName = product.category?.name || "Uncategorized";
      categoryMap.set(categoryName, (categoryMap.get(categoryName) || 0) + 1);
    }

    return Array.from(categoryMap, ([name, count]) => ({ name, count })).sort(
      (firstCategory, secondCategory) =>
      firstCategory.name.localeCompare(secondCategory.name)
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
      product.category?.name].

      filter(Boolean).
      join(" ").
      toLowerCase();

      const matchesSearch =
      !searchQuery || searchableText.includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [products, searchQuery, selectedCategory]);

  useEffect(() => {
    const controller = new AbortController();

    async function initializePage() {
      try {

        const data = await getProducts({ signal: controller.signal });
        setProducts(isProductArray(data) ? data : []);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;

        setError(err instanceof Error ? err.message : "Failed to load products");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    initializePage();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <HomeSkeleton />;
  }

  if (error) {
    return <p className="p-8 text-red-500">{error}</p>;
  }

  return (

    <main className="min-h-screen bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Badge className="mb-3 gap-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
            <ShoppingBag aria-hidden="true" className="size-3.5" />
            Product Catalog
          </Badge>
          <h1 className="text-3xl font-bold">Our Catalog</h1>
          <p className="mt-2 text-muted-foreground">
            {searchQuery ?
            `Search results for "${searchParams.get("search")}"` :
            "Browse our latest products"}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="bg-background shadow-sm">
              <CardHeader className="">
                <Badge
                  variant="outline"
                  className="mb-2 w-fit gap-1.5 bg-muted/60">
                  
                  <Filter aria-hidden="true" className="size-3.5" />
                  Filter
                </Badge>
                <CardTitle className="">Categories</CardTitle>
                <CardDescription className="">
                  Choose a category to refine the product list.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                <Button
                  variant={selectedCategory === "all" ? "secondary" : "ghost"}
                  className="w-full justify-between"
                  onClick={() => setSelectedCategory("all")}>
                  
                  <span>All Products</span>
                  <Badge variant="outline" className="bg-background">
                    {products.length}
                  </Badge>
                </Button>

                <Separator className="my-3" />

                <div className="grid gap-1">
                  {categories.map((category) =>
                  <Button
                    key={category.name}
                    variant={
                    selectedCategory === category.name ?
                    "secondary" :
                    "ghost"
                    }
                    className="w-full justify-between"
                    onClick={() => setSelectedCategory(category.name)}>
                    
                      <span className="truncate">{category.name}</span>
                      <Badge variant="outline" className="bg-background">
                        {category.count}
                      </Badge>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </aside>

          <div>
            <div className="mb-4 flex flex-col justify-between gap-3 rounded-lg border bg-background p-4 shadow-sm sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold">
                  {selectedCategory === "all" ?
                  "All Products" :
                  selectedCategory}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length}{" "}
                  products
                </p>
              </div>

              {selectedCategory !== "all" &&
              <Button
                variant="outline"
                className=""
                onClick={() => setSelectedCategory("all")}>
                
                  Reset Filter
                </Button>
              }
            </div>

            {filteredProducts.length > 0 ?
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {}
                {filteredProducts.map((product, index) =>

              <ProductCard
                key={product.id}
                product={product}
                priority={index < 3} />

              )}
              </div> :

            <Card className="bg-background text-center shadow-sm">
                <CardContent className="py-10">
                  <PackageSearch
                  aria-hidden="true"
                  className="mx-auto size-10 text-muted-foreground" />
                
                  <p className="mt-4 text-lg font-semibold">
                    No products found
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try searching with another product name or category.
                  </p>
                </CardContent>
              </Card>
            }
          </div>
        </div>
      </section>
    </main>);

}

export default function HomePage() {
  return (

    <Suspense fallback={<HomeSkeleton />}> {}
      <HomeContent />
    </Suspense>);

}
