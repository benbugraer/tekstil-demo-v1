import { cookies } from "next/headers";

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

// Cookie yönetim fonksiyonları
export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name);
};

export const setCookie = async (
  name: string,
  value: string,
  maxAge = COOKIE_EXPIRY.LONG
) => {
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    ...COOKIE_OPTIONS,
    maxAge,
  });
};

export const deleteCookie = async (name: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(name);
};

// Cookie izin durumunu kontrol et
export const hasConsent = async () => {
  const consent = await getCookie(COOKIE_NAMES.CONSENT);
  return consent?.value === "true";
};

// Cookie izin durumunu kaydet
export const setConsent = (accepted: boolean) => {
  setCookie(COOKIE_NAMES.CONSENT, accepted.toString());
};
