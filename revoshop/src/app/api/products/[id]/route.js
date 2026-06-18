import { NextResponse } from "next/server";
import {
  AUTH_SESSION_COOKIE,
  isAdminSession,
  parseSessionCookie,
} from "@/lib/session";

const BASE_URL = "https://api.escuelajs.co/api/v1";

// Fungsi pembantu: cek apakah request berasal dari admin yang sudah login.
// Middleware sudah melindungi halaman /admin di browser, tapi API route
// perlu dicek sendiri karena endpoint bisa dipanggil langsung tanpa browser.
function isAdminRequest(request) {
  const session = parseSessionCookie(
    request.cookies.get(AUTH_SESSION_COOKIE)?.value,
  );
  return isAdminSession(session);
}

// Fungsi untuk ambil detail produk berdasarkan ID
export async function GET(request, { params }) {
  const { id } = await params;

  const res = await fetch(`${BASE_URL}/products/${id}`);
  const data = await res.json();

  return NextResponse.json(data);
}

// Fungsi untuk update produk
export async function PUT(request, { params }) {
  // Hanya admin yang boleh mengubah produk
  if (!isAdminRequest(request)) {
    return NextResponse.json(
      { message: "Forbidden: admin access required." },
      { status: 403 },
    );
  }

  const { id } = await params;
  const body = await request.json();

  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}

// Fungsi untuk hapus produk
export async function DELETE(request, { params }) {
  // Hanya admin yang boleh menghapus produk
  if (!isAdminRequest(request)) {
    return NextResponse.json(
      { message: "Forbidden: admin access required." },
      { status: 403 },
    );
  }

  const { id } = await params;

  await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });

  return NextResponse.json({ message: "Product deleted" });
}
