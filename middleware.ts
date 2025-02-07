import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = [
  "/",
  "/kurumsal/yonetim",
  "/kurumsal/kilometre-taslarimiz",
  "/hizmetlerimiz/moda-tasarim",
  "/hizmetlerimiz/uretim",
  "/hizmetlerimiz/sevkiyat",
  "/surdurulebilirlik",
  "/iletisim",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Eğer path public paths listesinde yoksa ve özel bir dosya değilse (örn: _next, api, images vs.)
  if (
    !PUBLIC_PATHS.includes(pathname) &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.includes(".") &&
    pathname !== "/404"
  ) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
