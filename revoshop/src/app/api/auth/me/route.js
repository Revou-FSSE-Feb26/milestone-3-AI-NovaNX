import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { AUTH_SESSION_COOKIE } from "@/lib/auth-constants";

// Membaca session cookie dan mengembalikan data user yang sedang login.
export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(AUTH_SESSION_COOKIE);

    if (!sessionCookie?.value) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 },
      );
    }

    const sessionData = JSON.parse(sessionCookie.value);

    return NextResponse.json(sessionData.user);
  } catch (error) {
    console.error("Fetch Session Error:", error);

    return NextResponse.json(
      { message: "Failed to fetch session" },
      { status: 500 },
    );
  }
}
