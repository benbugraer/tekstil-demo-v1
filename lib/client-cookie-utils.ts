import { COOKIE_NAMES, COOKIE_EXPIRY } from "./cookie-utils";

// Client tarafında cookie yönetimi
export const getClientCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
};

export const setClientCookie = (
  name: string,
  value: string,
  maxAge = COOKIE_EXPIRY.LONG
) => {
  const options = [
    `${name}=${value}`,
    "path=/",
    `max-age=${maxAge}`,
    process.env.NODE_ENV === "production" ? "secure" : "",
    "samesite=lax",
  ]
    .filter(Boolean)
    .join(";");

  document.cookie = options;
};

export const deleteClientCookie = (name: string) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};

// Cookie izin durumunu kontrol et
export const hasClientConsent = (): boolean => {
  return getClientCookie(COOKIE_NAMES.CONSENT) === "true";
};

// Cookie izin durumunu kaydet
export const setClientConsent = (accepted: boolean) => {
  setClientCookie(COOKIE_NAMES.CONSENT, accepted.toString());
};
