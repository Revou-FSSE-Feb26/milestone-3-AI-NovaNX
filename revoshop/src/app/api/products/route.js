import { NextResponse } from "next/server";
import { mockProducts } from "@/data/mockProducts";
import {
  AUTH_SESSION_COOKIE,
  isAdminSession,
  parseSessionCookie,
} from "@/lib/session";

const BASE_URL = "https://api.escuelajs.co/api/v1";
const USE_MOCK = false; // Ganti ke true untuk menggunakan data mock

// Fungsi pembantu: cek apakah request berasal dari admin yang sudah login.
// Middleware sudah melindungi halaman /admin di browser, tapi API route
// perlu dicek sendiri karena endpoint bisa dipanggil langsung tanpa browser.
function isAdminRequest(request) {
  const session = parseSessionCookie(
    request.cookies.get(AUTH_SESSION_COOKIE)?.value,
  );
  return isAdminSession(session);
}

// Fungsi untuk mengambil data dari API eksternal atau Mock
export async function GET(request) {
  if (USE_MOCK) {
    return NextResponse.json(mockProducts);
  }

  const { searchParams } = new URL(request.url);
  const offset = searchParams.get("offset") || "0";
  const limit = searchParams.get("limit") || "200";

  const res = await fetch(
    `${BASE_URL}/products?offset=${offset}&limit=${limit}`,
  );
  const data = await res.json();

  return NextResponse.json(data);
}

// Fungsi untuk membuat produk baru
export async function POST(request) {
  // Hanya admin yang boleh membuat produk baru
  if (!isAdminRequest(request)) {
    return NextResponse.json(
      { message: "Forbidden: admin access required." },
      { status: 403 },
    );
  }

  const body = await request.json();

  if (USE_MOCK) {
    return NextResponse.json({ ...body, id: Date.now() });
  }

  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
