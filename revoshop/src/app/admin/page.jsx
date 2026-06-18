"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

function validate(form) {
  if (!form.title.trim()) return "Product title is required.";
  if (!form.price || Number(form.price) <= 0)
    return "Price must be a positive number.";
  if (!form.description.trim()) return "Description is required.";
  if (!form.categoryId) return "Please select a category.";
  return "";
}

function FieldLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {children}
    </label>
  );
}

function ProductForm({ form, setForm, categories, error, submitting }) {
  // Memperbarui satu field di dalam objek form saat pengguna mengetik
  function handleChange(field, value) {
    setForm(function (prev) {
      return { ...prev, [field]: value };
    });
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-4" />
          <span>{error}</span>
        </div>
      )}

      {}
      <div className="space-y-1.5">
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <Input
          id="title"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="e.g. Classic Sneakers"
          disabled={submitting}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <FieldLabel htmlFor="price">Price (USD)</FieldLabel>
          <Input
            id="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={(e) => handleChange("price", e.target.value)}
            placeholder="29.99"
            disabled={submitting}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel htmlFor="categoryId">Category</FieldLabel>
          <select
            id="categoryId"
            value={form.categoryId}
            onChange={(e) => handleChange("categoryId", e.target.value)}
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
        </div>
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="description">Description</FieldLabel>
        <textarea
          id="description"
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Short product description"
          rows={4}
          disabled={submitting}
          className="w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
        />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="images">Image URLs</FieldLabel>
        <textarea
          id="images"
          value={form.images}
          onChange={(e) => handleChange("images", e.target.value)}
          placeholder="One URL per line (or comma separated)"
          rows={3}
          disabled={submitting}
          className="w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
        />

        <p className="text-xs text-muted-foreground">
          Leave empty to use a placeholder image.
        </p>
      </div>
    </div>
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
  const [createForm, setCreateForm] = useState(EMPTY_FORM); // isi form
  const [createError, setCreateError] = useState(""); // pesan error form
  const [creating, setCreating] = useState(false); // sedang menyimpan?

  // ---- State: Form Edit Produk ----
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState(EMPTY_FORM);
  const [editError, setEditError] = useState("");
  const [updating, setUpdating] = useState(false);

  const [deletingId, setDeletingId] = useState(null);

  async function loadData() {
    if (authSession?.role !== ADMIN_ROLE) return;

    try {
      setLoading(true);
      setError("");
      const [productsData, categoriesData] = await Promise.all([
        getProducts(),
        getCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
    async function checkAccess() {
      const user = await getCurrentUser().catch(() => null);
      if (user) {
        writeAuthSession(user);
      }
      setAuthSession(user);
      setDataSource(getProductDataSource());
      setAuthChecked(true);
    }

    checkAccess();

    const unsubscribe = subscribeToAuthSession(() => {
      setAuthSession(readAuthSession());
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (authSession?.role !== ADMIN_ROLE) return;

    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [authSession?.role, dataSource]);

  useEffect(() => {
    if (!feedback) return;
    const timeoutId = setTimeout(() => setFeedback(null), 3000);
    return () => clearTimeout(timeoutId);
  }, [feedback]);

  const searchQuery = search.toLowerCase().trim();

  // Filter produk berdasarkan kata kunci pencarian
  let filteredProducts;
  if (!searchQuery) {
    // Jika tidak ada kata kunci, tampilkan semua produk
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(function (product) {
      // Gabungkan title, kategori, dan deskripsi menjadi satu teks
      const title = product.title || "";
      const categoryName = (product.category && product.category.name) || "";
      const description = product.description || "";
      const fullText = (
        title +
        " " +
        categoryName +
        " " +
        description
      ).toLowerCase();
      return fullText.includes(searchQuery);
    });
  }

  const handleCreate = async () => {
    const validationError = validate(createForm);
    if (validationError) {
      setCreateError(validationError);
      return;
    }

    try {
      setCreating(true);
      setCreateError("");
      const created = await createProduct(buildPayload(createForm));
      setProducts((prev) => [created, ...prev]);
      setFeedback({ type: "success", message: `"${created.title}" created.` });
      setCreateForm(EMPTY_FORM);
      setCreateOpen(false);
    } catch (err) {
      setCreateError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const openEdit = (product) => {
    setEditingProduct(product);
    setEditError("");

    // Bersihkan setiap URL gambar dan gabungkan dengan baris baru
    const imageList = product.images || [];
    const cleanedImages = [];
    for (let i = 0; i < imageList.length; i++) {
      cleanedImages.push(cleanImageUrl(imageList[i]));
    }

    setEditForm({
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

  const handleUpdate = async () => {
    if (!editingProduct) return;

    const validationError = validate(editForm);
    if (validationError) {
      setEditError(validationError);
      return;
    }

    try {
      setUpdating(true);
      setEditError("");
      const updated = await updateProduct(
        editingProduct.id,
        buildPayload(editForm),
      );
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProduct.id ? updated : product,
        ),
      );
      setFeedback({ type: "success", message: `"${updated.title}" updated.` });
      setEditingProduct(null);
    } catch (err) {
      setEditError(err.message);
    } finally {
      setUpdating(false);
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
    return (
      <main className="min-h-screen bg-muted/30 px-4 py-8 text-foreground sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl">
          <Card className="bg-background text-center shadow-sm">
            <CardHeader className="items-center p-8">
              <CardTitle>Checking access...</CardTitle>
              <CardDescription>
                Please wait while RevoShop checks your login session.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
    );
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

            <div className="flex flex-wrap items-center gap-2">
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
                Refresh
              </Button>

              <Sheet open={createOpen} onOpenChange={setCreateOpen}>
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
                      form={createForm}
                      setForm={setCreateForm}
                      categories={categories}
                      error={createError}
                      submitting={creating}
                    />
                  </div>

                  <SheetFooter>
                    <Button onClick={handleCreate} disabled={creating}>
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

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Layers aria-hidden="true" className="size-4" />
                {filteredProducts.length} of {products.length} products
              </div>
            </div>

            <Separator />

            {error && <p className="text-sm text-destructive">{error}</p>}

            {loading ? (
              <p className="py-10 text-center text-sm text-muted-foreground">
                Loading products…
              </p>
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
          if (!open) setEditingProduct(null);
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
              form={editForm}
              setForm={setEditForm}
              categories={categories}
              error={editError}
              submitting={updating}
            />
          </div>

          <SheetFooter>
            <Button onClick={handleUpdate} disabled={updating}>
              {updating && (
                <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              )}
              Save Changes
            </Button>
            <Button
              variant="outline"
              disabled={updating}
              onClick={() => setEditingProduct(null)}
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
