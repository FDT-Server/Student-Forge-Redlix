import { NextResponse } from "next/server";
import { createAdminToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body || {};

    const expectedEmail = process.env.ADMIN_EMAIL || "admin@studentforge.com";
    const expectedPassword = process.env.ADMIN_PASSWORD || "supersecretadminpassword123";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Verify credentials
    const trimmedEmail = String(email).trim().toLowerCase();
    const targetEmail = expectedEmail.trim().toLowerCase();

    if (trimmedEmail !== targetEmail || String(password) !== expectedPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate signed token
    const token = await createAdminToken(trimmedEmail);

    const response = NextResponse.json({
      success: true,
      redirect: "/admin/dashboard",
      message: "Authentication successful",
    });

    // Set secure HTTP-only cookie
    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred" },
      { status: 500 }
    );
  }
}
