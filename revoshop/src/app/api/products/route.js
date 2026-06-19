import { NextResponse } from "next/server";
import { mockProducts } from "@/data/mockProducts";
import { fetchWithRetry } from "@/lib/fetch-with-retry";
import { validateProductPayload } from "@/lib/product-validation";
import { isVerifiedAdminRequest } from "@/lib/session";

const BASE_URL = "https://api.escuelajs.co/api/v1";
const USE_MOCK = false; // Ganti ke true untuk menggunakan data mock

// Fungsi untuk mengambil data dari API eksternal atau Mock
export async function GET(request) {
  try {
    if (USE_MOCK) {
      return NextResponse.json(mockProducts);
    }

    const { searchParams } = new URL(request.url);
    const offset = Math.max(Number(searchParams.get("offset")) || 0, 0);
    const limit = Math.min(
      Math.max(Number(searchParams.get("limit")) || 200, 1),
      200,
    );

    const res = await fetchWithRetry(
      `${BASE_URL}/products?offset=${offset}&limit=${limit}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Products GET error:", error);

    if (mockProducts.length > 0) {
      return NextResponse.json(mockProducts);
    }

    return NextResponse.json(
      { message: "Products are unavailable from Platzi and mock data." },
      { status: 503 },
    );
  }
}

// Fungsi untuk membuat produk baru
export async function POST(request) {
  if (!(await isVerifiedAdminRequest(request))) {
    return NextResponse.json(
      { message: "Forbidden: admin access required." },
      { status: 403 },
    );
  }

  try {
    const body = await request.json().catch(() => null);
    const validation = validateProductPayload(body);

    if (validation.error) {
      return NextResponse.json(
        { message: validation.error },
        { status: 400 },
      );
    }

    if (USE_MOCK) {
      return NextResponse.json(
        { ...validation.data, id: Date.now() },
        { status: 201 },
      );
    }

    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });
    const data = await res.json().catch(() => null);

    if (!res.ok) {
      return NextResponse.json(
        { message: data?.message || "Failed to create product." },
        { status: res.status },
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Products POST error:", error);
    return NextResponse.json(
      { message: "Unable to create product." },
      { status: 500 },
    );
  }
}
