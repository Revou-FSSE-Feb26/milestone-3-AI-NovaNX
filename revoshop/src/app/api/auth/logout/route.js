import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ ok: true });

  response.cookies.delete("revoshop-auth-token");
  response.cookies.delete("revoshop-auth-role");

  return response;
}
