import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ASSET_CACHE_CONFIG } from "@/lib/cache-config";

// Statik dosya uzantıları
const STATIC_FILE_EXTENSIONS = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "ico",
  "svg",
  "webp",
  "avif", // Resimler
  "css",
  "js",
  "json", // Web dosyaları
  "woff",
  "woff2",
  "ttf",
  "eot", // Fontlar
  "mp4",
  "webm",
  "ogg", // Medya
];

// Public klasöründeki özel dizinler
const PUBLIC_PATHS = [
  "/brands",
  "/factory",
  "/jungle",
  "/sewing",
  "/textile",
  "/worker",
  "/members",
  "/threads",
  "/logo",
  "/flags",
  "/social",
  "/icons",
];

// API rotaları
const API_PATHS = ["/api/contact", "/api/newsletter"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();
  const isDevelopment = process.env.NODE_ENV === "development";

  if (!isDevelopment) {
    // Statik dosya kontrolü
    const fileExtension = pathname.split(".").pop()?.toLowerCase();
    if (fileExtension && STATIC_FILE_EXTENSIONS.includes(fileExtension)) {
      // Resim dosyaları için
      if (
        ["jpg", "jpeg", "png", "gif", "webp", "avif", "svg"].includes(
          fileExtension
        )
      ) {
        Object.entries(ASSET_CACHE_CONFIG.images).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
      }
      // Font dosyaları için
      else if (["woff", "woff2", "ttf", "eot"].includes(fileExtension)) {
        Object.entries(ASSET_CACHE_CONFIG.fonts).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
      }
      // Diğer statik dosyalar için
      else {
        Object.entries(ASSET_CACHE_CONFIG.static).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
      }
    }

    // Public klasör kontrolü
    if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
      Object.entries(ASSET_CACHE_CONFIG.static).forEach(([key, value]) => {
        response.headers.set(key, value);
      });
    }

    // API rota kontrolü
    if (API_PATHS.some((path) => pathname.startsWith(path))) {
      Object.entries(ASSET_CACHE_CONFIG.api).forEach(([key, value]) => {
        response.headers.set(key, value);
      });
    }

    // Güvenlik başlıkları
    response.headers.set("X-DNS-Prefetch-Control", "on");
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
    response.headers.set("X-Frame-Options", "SAMEORIGIN");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "origin-when-cross-origin");
    response.headers.set(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=()"
    );
  }

  // Development ortamında cache kontrolünü devre dışı bırak
  if (isDevelopment) {
    response.headers.set("Cache-Control", "no-store, max-age=0");
  }

  return response;
}

export const config = {
  matcher: [
    // Statik dosyalar
    "/((?!_next/static|_next/image|favicon.ico).*)",
    // API rotaları
    "/api/:path*",
  ],
};
