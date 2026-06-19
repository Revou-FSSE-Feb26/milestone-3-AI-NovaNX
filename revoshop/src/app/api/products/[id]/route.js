import { NextResponse } from "next/server";
import { mockProducts } from "@/data/mockProducts";
import { fetchWithRetry } from "@/lib/fetch-with-retry";
import { validateProductPayload } from "@/lib/product-validation";
import { isVerifiedAdminRequest } from "@/lib/session";

const BASE_URL = "https://api.escuelajs.co/api/v1";

// Fungsi untuk ambil detail produk berdasarkan ID
export async function GET(request, { params }) {
  const { id } = await params;

  try {
    const res = await fetchWithRetry(`${BASE_URL}/products/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    // Setelah retry gagal, lanjutkan ke mock data.
  }

  const fallbackProduct = mockProducts.find(
    (product) => Number(product.id) === Number(id),
  );

  if (fallbackProduct) {
    return NextResponse.json(fallbackProduct);
  }

  return NextResponse.json(
    { message: "Product not found in Platzi or mock data." },
    { status: 404 },
  );
}

// Fungsi untuk update produk
export async function PUT(request, { params }) {
  if (!(await isVerifiedAdminRequest(request))) {
    return NextResponse.json(
      { message: "Forbidden: admin access required." },
      { status: 403 },
    );
  }

  try {
    const { id } = await params;
    const body = await request.json().catch(() => null);
    const validation = validateProductPayload(body);

    if (validation.error) {
      return NextResponse.json(
        { message: validation.error },
        { status: 400 },
      );
    }

    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });
    const data = await res.json().catch(() => null);

    if (!res.ok) {
      return NextResponse.json(
        { message: data?.message || "Failed to update product." },
        { status: res.status },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Product PUT error:", error);
    return NextResponse.json(
      { message: "Unable to update product." },
      { status: 500 },
    );
  }
}

// Fungsi untuk hapus produk
export async function DELETE(request, { params }) {
  if (!(await isVerifiedAdminRequest(request))) {
    return NextResponse.json(
      { message: "Forbidden: admin access required." },
      { status: 403 },
    );
  }

  try {
    const { id } = await params;

    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return NextResponse.json(
        { message: data?.message || "Failed to delete product." },
        { status: res.status },
      );
    }

    return NextResponse.json({ message: "Product deleted." });
  } catch (error) {
    console.error("Product DELETE error:", error);
    return NextResponse.json(
      { message: "Unable to delete product." },
      { status: 500 },
    );
  }
}
