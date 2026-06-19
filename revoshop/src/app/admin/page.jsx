"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  AlertTriangle,
  CheckCircle2,
  Lock,
  Layers,
  Loader2,
  PackagePlus,
  Pencil,
  PlusCircle,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  createProduct,
  deleteProduct,
  getCategories,
  getProductDataSource,
  getProducts,
  PRODUCT_DATA_SOURCES,
  setProductDataSource,
  updateProduct,
} from "@/lib/api";
import {
  getCurrentUser,
  readAuthSession,
  subscribeToAuthSession,
  writeAuthSession,
} from "@/lib/auth";
import { ADMIN_ROLE } from "@/lib/auth-constants";
import { cleanImageUrl, formatCurrency } from "@/lib/utils";

const EMPTY_FORM = {
  title: "",
  price: "",
  description: "",
  categoryId: "",
  images: "",
};

function buildPayload(form) {
  // Pisahkan URL gambar berdasarkan baris baru atau koma,
  // lalu buang spasi dan baris kosong
  const rawImages = form.images.split(/\n|,/);
  const images = [];
  for (let i = 0; i < rawImages.length; i++) {
    const trimmed = rawImages[i].trim();
    if (trimmed) {
      images.push(trimmed);
    }
  }

  // Jika tidak ada gambar yang diisi, gunakan gambar placeholder
  const finalImages =
    images.length > 0 ? images : ["https://placehold.co/600x400"];

  return {
    title: form.title.trim(),
    price: Number(form.price),
    description: form.description.trim(),
    categoryId: Number(form.categoryId),
    images: finalImages,
  };
}

function FieldLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {children}
    </label>
  );
}

function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-xs text-destructive">{message}</p>;
}

function ProductForm({
  formId,
  register,
  errors,
  categories,
  submitting,
  onSubmit,
}) {
  return (
    <form id={formId} onSubmit={onSubmit} className="space-y-4">
      {errors.root?.server && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-4" />
          <span>{errors.root.server.message}</span>
        </div>
      )}

      <div className="space-y-1.5">
        <FieldLabel htmlFor={`${formId}-title`}>Title</FieldLabel>
        <Input
          id={`${formId}-title`}
          {...register("title", {
            required: "Product title is required.",
            validate: (value) =>
              value.trim().length > 0 || "Product title is required.",
          })}
          placeholder="e.g. Classic Sneakers"
          disabled={submitting}
        />
        <FieldError message={errors.title?.message} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <FieldLabel htmlFor={`${formId}-price`}>Price (USD)</FieldLabel>
          <Input
            id={`${formId}-price`}
            type="number"
            min="0"
            step="0.01"
            {...register("price", {
              required: "Price is required.",
              valueAsNumber: true,
              min: {
                value: 0.01,
                message: "Price must be a positive number.",
              },
            })}
            placeholder="29.99"
            disabled={submitting}
          />
          <FieldError message={errors.price?.message} />
        </div>

        <div className="space-y-1.5">
          <FieldLabel htmlFor={`${formId}-categoryId`}>Category</FieldLabel>
          <select
            id={`${formId}-categoryId`}
            {...register("categoryId", {
              required: "Please select a category.",
              valueAsNumber: true,
            })}
            disabled={submitting}
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
          >
            <option value="">Select category…</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <FieldError message={errors.categoryId?.message} />
        </div>
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor={`${formId}-description`}>Description</FieldLabel>
        <textarea
          id={`${formId}-description`}
          {...register("description", {
            required: "Description is required.",
            validate: (value) =>
              value.trim().length > 0 || "Description is required.",
          })}
          placeholder="Short product description"
          rows={4}
          disabled={submitting}
          className="w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
        />
        <FieldError message={errors.description?.message} />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor={`${formId}-images`}>Image URLs</FieldLabel>
        <textarea
          id={`${formId}-images`}
          {...register("images")}
          placeholder="One URL per line (or comma separated)"
          rows={3}
          disabled={submitting}
          className="w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
        />

        <p className="text-xs text-muted-foreground">
          Leave empty to use a placeholder image.
        </p>
      </div>
    </form>
  );
}

function AdminProductSkeleton() {
  return (
    <div
      className="grid animate-pulse gap-3 sm:grid-cols-2 xl:grid-cols-3"
      aria-busy="true"
      aria-label="Loading products"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 rounded-xl border bg-card p-3 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <div className="size-16 shrink-0 rounded-md bg-muted" />
            <div className="min-w-0 flex-1">
              <div className="h-5 w-3/4 rounded bg-muted" />
              <div className="mt-2 h-3 w-20 rounded bg-muted" />
              <div className="mt-3 flex gap-2">
                <div className="h-5 w-24 rounded-full bg-muted" />
                <div className="h-5 w-16 rounded bg-muted" />
              </div>
            </div>
          </div>
          <div className="flex gap-2 border-t pt-3">
            <div className="h-8 flex-1 rounded-md bg-muted" />
            <div className="h-8 flex-1 rounded-md bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}

function AdminPageSkeleton() {
  return (
    <main
      className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-busy="true"
      aria-label="Loading admin dashboard"
    >
      <section className="mx-auto max-w-7xl animate-pulse">
        <Card className="bg-background shadow-sm">
          <CardHeader className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <div className="h-6 w-40 rounded-full bg-muted" />
              <div className="h-9 w-64 rounded bg-muted" />
              <div className="h-4 w-full max-w-lg rounded bg-muted" />
            </div>
            <div className="flex gap-2">
              <div className="h-9 w-44 rounded-md bg-muted" />
              <div className="h-9 w-24 rounded-md bg-muted" />
              <div className="h-9 w-32 rounded-md bg-muted" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between gap-3">
              <div className="h-9 w-full max-w-sm rounded-md bg-muted" />
              <div className="h-5 w-32 rounded bg-muted" />
            </div>
            <Separator />
            <AdminProductSkeleton />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default function AdminPage() {
  // ---- State: Autentikasi ----
  const [authSession, setAuthSession] = useState(null); // data sesi login
  const [authChecked, setAuthChecked] = useState(false); // sudah dicek belum?

  // ---- State: Data Produk & Kategori ----
  const [products, setProducts] = useState([]); // daftar produk
  const [categories, setCategories] = useState([]); // daftar kategori
  const [loading, setLoading] = useState(true); // sedang loading?
  const [error, setError] = useState(""); // pesan error
  const [search, setSearch] = useState(""); // kata kunci pencarian
  const [dataSource, setDataSource] = useState(PRODUCT_DATA_SOURCES.PLATZI); // sumber data aktif
  const [feedback, setFeedback] = useState(null); // notifikasi sukses/error

  // ---- State: Form Tambah Produk ----
  const [createOpen, setCreateOpen] = useState(false); // sheet terbuka/tutup
  const {
    register: registerCreate,
    handleSubmit: submitCreateForm,
    reset: resetCreateForm,
    setError: setCreateError,
    formState: {
      errors: createErrors,
      isSubmitting: creating,
    },
  } = useForm({ defaultValues: EMPTY_FORM });

  // ---- State: Form Edit Produk ----
  const [editingProduct, setEditingProduct] = useState(null);
  const {
    register: registerEdit,
    handleSubmit: submitEditForm,
    reset: resetEditForm,
    setError: setEditError,
    formState: {
      errors: editErrors,
      isSubmitting: updating,
    },
  } = useForm({ defaultValues: EMPTY_FORM });

  const [deletingId, setDeletingId] = useState(null);
  const reloadControllerRef = useRef(null);

  async function loadData() {
    if (authSession?.role !== ADMIN_ROLE) return;

    reloadControllerRef.current?.abort();
    const controller = new AbortController();
    reloadControllerRef.current = controller;

    try {
      setLoading(true);
      setError("");
      const [productsData, categoriesData] = await Promise.all([
        getProducts({ signal: controller.signal }),
        getCategories({ signal: controller.signal }),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (err) {
      if (err.name === "AbortError") return;

      setError(err.message);
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }

  const handleDataSourceChange = (event) => {
    const nextSource = event.target.value;
    setDataSource(nextSource);
    setProductDataSource(nextSource);
    setSearch("");

    // Tentukan pesan notifikasi sesuai sumber data yang dipilih
    let message;
    if (nextSource === PRODUCT_DATA_SOURCES.MOCK) {
      message = "Product source switched to Mock Data.";
    } else {
      message = "Product source switched to Platzi Fake Store API.";
    }

    setFeedback({ type: "success", message: message });
  };

  useEffect(() => {
    const controller = new AbortController();

    async function checkAccess() {
      try {
        const user = await getCurrentUser({ signal: controller.signal });
        if (user) {
          writeAuthSession(user);
        }
        setAuthSession(user);
        setDataSource(getProductDataSource());
      } catch (error) {
        if (error.name !== "AbortError") {
          setAuthSession(null);
        }
      } finally {
        if (!controller.signal.aborted) {
          setAuthChecked(true);
        }
      }
    }

    checkAccess();

    const unsubscribe = subscribeToAuthSession(() => {
      setAuthSession(readAuthSession());
    });

    return () => {
      controller.abort();
      reloadControllerRef.current?.abort();
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (authSession?.role !== ADMIN_ROLE) return;

    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");
        const [productsData, categoriesData] = await Promise.all([
          getProducts({ signal: controller.signal }),
          getCategories({ signal: controller.signal }),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        if (err.name === "AbortError") return;

        setError(err.message);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [authSession?.role, dataSource]);

  useEffect(() => {
    if (!feedback) return;
    const timeoutId = setTimeout(() => setFeedback(null), 3000);
    return () => clearTimeout(timeoutId);
  }, [feedback]);

  const filteredProducts = useMemo(() => {
    const searchQuery = search.toLowerCase().trim();

    if (!searchQuery) {
      return products;
    }

    return products.filter((product) => {
      const searchableText = [
        product.title,
        product.category?.name,
        product.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchQuery);
    });
  }, [products, search]);

  const handleCreate = async (formData) => {
    try {
      const created = await createProduct(buildPayload(formData));
      setProducts((prev) => [created, ...prev]);
      setFeedback({ type: "success", message: `"${created.title}" created.` });
      resetCreateForm(EMPTY_FORM);
      setCreateOpen(false);
    } catch (err) {
      setCreateError("root.server", {
        message: err.message,
      });
    }
  };

  const openEdit = (product) => {
    setEditingProduct(product);

    // Bersihkan setiap URL gambar dan gabungkan dengan baris baru
    const imageList = product.images || [];
    const cleanedImages = [];
    for (let i = 0; i < imageList.length; i++) {
      cleanedImages.push(cleanImageUrl(imageList[i]));
    }

    resetEditForm({
      title: product.title || "",
      price: product.price ? product.price.toString() : "",
      description: product.description || "",
      categoryId:
        product.category && product.category.id
          ? product.category.id.toString()
          : "",
      images: cleanedImages.join("\n"),
    });
  };

  const handleUpdate = async (formData) => {
    if (!editingProduct) return;

    try {
      const updated = await updateProduct(
        editingProduct.id,
        buildPayload(formData),
      );
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProduct.id ? updated : product,
        ),
      );
      setFeedback({ type: "success", message: `"${updated.title}" updated.` });
      setEditingProduct(null);
    } catch (err) {
      setEditError("root.server", {
        message: err.message,
      });
    }
  };

  const handleDelete = async (product) => {
    try {
      setDeletingId(product.id);
      await deleteProduct(product.id);
      setProducts((prev) => prev.filter((item) => item.id !== product.id));
      setFeedback({ type: "success", message: `"${product.title}" deleted.` });
    } catch (err) {
      setFeedback({ type: "error", message: err.message });
    } finally {
      setDeletingId(null);
    }
  };

  if (!authChecked) {
    return <AdminPageSkeleton />;
  }

  // Tentukan apakah pengguna saat ini adalah admin
  const isAdmin = authSession !== null && authSession.role === ADMIN_ROLE;

  return !isAdmin ? (
    <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl">
        <Card className="bg-background text-center shadow-sm">
          <CardHeader className="items-center p-8">
            <div className="mb-3 flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <Lock aria-hidden="true" className="size-8" />
            </div>
            <Badge variant="outline" className="bg-muted/60">
              Admin Only
            </Badge>
            <CardTitle className="mt-3 text-3xl font-bold">
              This page can only be accessed by Admin.
            </CardTitle>
            <CardDescription className="max-w-xl text-base leading-7">
              Please log in with an admin account to manage RevoShop products.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-3 pb-8">
            <Button asChild>
              <Link href="/login">Login as Admin</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  ) : (
    <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl space-y-6">
        <Card className="bg-background shadow-sm">
          <CardHeader className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge className="mb-3 w-fit gap-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                <ShieldCheck aria-hidden="true" className="size-3.5" />
                Admin Dashboard
              </Badge>
              <CardTitle className="text-3xl font-bold">
                Product Management
              </CardTitle>
              <CardDescription>
                Create, edit, and delete products from the selected global data
                source.
              </CardDescription>
            </div>

            <div className="flex flex-wrap items-end gap-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="product-data-source"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Product data source
                </label>
                <select
                  id="product-data-source"
                  value={dataSource}
                  onChange={handleDataSourceChange}
                  disabled={loading}
                  className="h-9 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
                >
                  <option value={PRODUCT_DATA_SOURCES.PLATZI}>
                    Data Source 1: Platzi Fake Store API
                  </option>
                  <option value={PRODUCT_DATA_SOURCES.MOCK}>
                    Data Source 2: Mock Data
                  </option>
                </select>
              </div>

              <Button
                variant="outline"
                onClick={loadData}
                disabled={loading}
                className="gap-2"
              >
                {loading ? (
                  <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                ) : (
                  <RefreshCw aria-hidden="true" className="size-4" />
                )}
                Reload Data
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {feedback && (
              <div
                className={`flex items-start gap-2 rounded-lg border p-3 text-sm ${
                  feedback.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-destructive/30 bg-destructive/10 text-destructive"
                }`}
              >
                {feedback.type === "success" ? (
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4" />
                ) : (
                  <AlertTriangle aria-hidden="true" className="mt-0.5 size-4" />
                )}
                <span>{feedback.message}</span>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full max-w-sm">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                />

                <Input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products"
                  className="pl-8"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Sheet
                  open={createOpen}
                  onOpenChange={(open) => {
                    setCreateOpen(open);
                    if (!open) resetCreateForm(EMPTY_FORM);
                  }}
                >
                  <SheetTrigger asChild>
                    <Button className="gap-2">
                      <PlusCircle aria-hidden="true" className="size-4" />
                      Add Product
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-lg">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <PackagePlus aria-hidden="true" className="size-5" />
                        Add Product
                      </SheetTitle>
                      <SheetDescription>
                        Fill in the product details. Fields marked are required.
                      </SheetDescription>
                    </SheetHeader>

                    <div className="overflow-y-auto px-4">
                      <ProductForm
                        formId="create-product-form"
                        register={registerCreate}
                        errors={createErrors}
                        categories={categories}
                        submitting={creating}
                        onSubmit={submitCreateForm(handleCreate)}
                      />
                    </div>

                    <SheetFooter>
                      <Button
                        type="submit"
                        form="create-product-form"
                        disabled={creating}
                      >
                        {creating && (
                          <Loader2
                            aria-hidden="true"
                            className="size-4 animate-spin"
                          />
                        )}
                        Create Product
                      </Button>
                      <SheetClose asChild>
                        <Button variant="outline" disabled={creating}>
                          Cancel
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Layers aria-hidden="true" className="size-4" />
                  {filteredProducts.length} of {products.length} products
                </div>
              </div>
            </div>

            <Separator />

            {error && <p className="text-sm text-destructive">{error}</p>}

            {loading ? (
              <AdminProductSkeleton />
            ) : filteredProducts.length === 0 ? (
              <p className="py-10 text-center text-sm text-muted-foreground">
                No products match your search.
              </p>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => {
                  const imageUrl = cleanImageUrl(product.images?.[0]);
                  const isDeleting = deletingId === product.id;

                  return (
                    <div
                      key={product.id}
                      className="flex flex-col gap-3 rounded-xl border bg-card p-3 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative size-16 shrink-0 overflow-hidden rounded-md border bg-muted">
                          {imageUrl && (
                            <Image
                              src={imageUrl}
                              alt={product.title}
                              fill
                              sizes="64px"
                              className="object-cover"
                              unoptimized
                            />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="line-clamp-2 font-semibold leading-tight">
                            {product.title}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            ID: {product.id}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="bg-muted/60">
                              {product.category?.name || "Uncategorized"}
                            </Badge>
                            <span className="text-sm font-semibold">
                              {formatCurrency(product.price || 0)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto flex gap-2 border-t pt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 gap-1.5"
                          onClick={() => openEdit(product)}
                        >
                          <Pencil aria-hidden="true" className="size-3.5" />
                          Edit
                        </Button>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 gap-1.5 text-destructive hover:text-destructive"
                              disabled={isDeleting}
                            >
                              {isDeleting ? (
                                <Loader2
                                  aria-hidden="true"
                                  className="size-3.5 animate-spin"
                                />
                              ) : (
                                <Trash2
                                  aria-hidden="true"
                                  className="size-3.5"
                                />
                              )}
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogMedia>
                                <Trash2 aria-hidden="true" className="size-5" />
                              </AlertDialogMedia>
                              <AlertDialogTitle>
                                Delete this product?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                &ldquo;{product.title}&rdquo; will be
                                permanently removed from the catalog.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                variant="destructive"
                                onClick={() => handleDelete(product)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <Sheet
        open={Boolean(editingProduct)}
        onOpenChange={(open) => {
          if (!open) {
            setEditingProduct(null);
            resetEditForm(EMPTY_FORM);
          }
        }}
      >
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Pencil aria-hidden="true" className="size-5" />
              Edit Product
            </SheetTitle>
            <SheetDescription>
              Update the product details and save your changes.
            </SheetDescription>
          </SheetHeader>

          <div className="overflow-y-auto px-4">
            <ProductForm
              formId="edit-product-form"
              register={registerEdit}
              errors={editErrors}
              categories={categories}
              submitting={updating}
              onSubmit={submitEditForm(handleUpdate)}
            />
          </div>

          <SheetFooter>
            <Button
              type="submit"
              form="edit-product-form"
              disabled={updating}
            >
              {updating && (
                <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              )}
              Save Changes
            </Button>
            <Button
              variant="outline"
              disabled={updating}
              onClick={() => {
                setEditingProduct(null);
                resetEditForm(EMPTY_FORM);
              }}
            >
              Cancel
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </main>
  );
}

/*
  ANALISIS PEMENUHAN PERSYARATAN:

  1. Admin Dashboard (View, Add, Edit, Delete):
     - View: Sudah diimplementasikan melalui state `products` dan `filteredProducts` yang ditampilkan dalam list card.
     - Add: Sudah diimplementasikan melalui Sheet "Add Product" dan fungsi `handleCreate` yang memanggil `createProduct`.
     - Edit: Sudah diimplementasikan melalui Sheet "Edit Product" dan fungsi `handleUpdate` yang memanggil `updateProduct`.
     - Delete: Sudah diimplementasikan melalui `AlertDialog` dan fungsi `handleDelete` yang memanggil `deleteProduct`.

  2. API Routes untuk CRUD:
     - Jika menggunakan `PRODUCT_DATA_SOURCES.PLATZI`, aplikasi berinteraksi langsung dengan API eksternal (https://api.escuelajs.co/).
     - Jika tujuan dari persyaratan ini adalah menggunakan API Internal (Next.js API Routes), maka kode saat ini masih menggunakan layer abstraksi `lib/api.js`.
     - Untuk memenuhi persyaratan "Implement API Routes for CRUD", Anda perlu memastikan bahwa `lib/api.js` mengarah ke endpoint `app/api/products/...` di project Anda sendiri, bukan ke URL eksternal secara langsung.
     - Saat ini, persyaratan sudah terpenuhi secara fungsional di sisi UI, namun pastikan `lib/api.js` Anda sudah membungkus request tersebut ke dalam rute API internal Next.js jika itu yang diminta oleh mentor.
*/
