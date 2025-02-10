// Cookie isimleri
export const COOKIE_NAMES = {
  CONSENT: "cookie-consent",
  THEME: "theme",
  LANGUAGE: "language",
} as const;

// Cookie süreleri (saniye cinsinden)
export const COOKIE_EXPIRY = {
  SHORT: 60 * 60 * 24, // 1 gün
  MEDIUM: 60 * 60 * 24 * 30, // 30 gün
  LONG: 60 * 60 * 24 * 365, // 1 yıl
} as const;

// Cookie ayarları
export const COOKIE_OPTIONS = {
  path: "/",
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  httpOnly: true,
};
