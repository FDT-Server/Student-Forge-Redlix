import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";
const DEFAULT_SECRET = "sf_admin_secure_secret_key_2026_987x54321";

function getSecret(): string {
  return process.env.ADMIN_JWT_SECRET || DEFAULT_SECRET;
}

// Convert string to Uint8Array
function textToBuffer(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

// Base64URL encoding helpers
function base64UrlEncode(str: string): string {
  const base64 = btoa(str);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(base64url: string): string {
  let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  return atob(base64);
}

// HMAC-SHA256 Web Crypto signing
async function hmacSign(data: string, secretStr: string): Promise<string> {
  const secretKey = await crypto.subtle.importKey(
    "raw",
    textToBuffer(secretStr) as unknown as BufferSource,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    secretKey,
    textToBuffer(data) as unknown as BufferSource
  );
  const hashArray = Array.from(new Uint8Array(signature));
  const binaryString = String.fromCharCode(...hashArray);
  return base64UrlEncode(binaryString);
}

export interface AdminPayload {
  email: string;
  exp: number;
}

/**
 * Creates a signed session token for the admin email
 */
export async function createAdminToken(email: string, expiresInHours = 24): Promise<string> {
  const payload: AdminPayload = {
    email,
    exp: Math.floor(Date.now() / 1000) + expiresInHours * 60 * 60,
  };

  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = await hmacSign(encodedPayload, getSecret());
  return `${encodedPayload}.${signature}`;
}

/**
 * Verifies a signed session token string
 */
export async function verifyAdminToken(token: string): Promise<AdminPayload | null> {
  if (!token || !token.includes(".")) return null;

  try {
    const [encodedPayload, signature] = token.split(".");
    if (!encodedPayload || !signature) return null;

    const expectedSig = await hmacSign(encodedPayload, getSecret());
    if (signature !== expectedSig) return null;

    const payloadJson = base64UrlDecode(encodedPayload);
    const payload: AdminPayload = JSON.parse(payloadJson);

    const nowSeconds = Math.floor(Date.now() / 1000);
    if (payload.exp < nowSeconds) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Checks authentication status from a raw cookie header or cookies instance
 */
export async function verifyAdminSessionFromCookie(cookieValue?: string | null): Promise<AdminPayload | null> {
  if (!cookieValue) return null;
  return await verifyAdminToken(cookieValue);
}

/**
 * Server-side helper for Next.js App Router Server Components & Server Actions
 */
export async function getAdminSession(): Promise<AdminPayload | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(COOKIE_NAME);
    if (!sessionCookie?.value) return null;

    return await verifyAdminToken(sessionCookie.value);
  } catch {
    return null;
  }
}

export { COOKIE_NAME };
