"use server";

import { cookies } from "next/headers";
import { COOKIE_NAMES, COOKIE_EXPIRY, COOKIE_OPTIONS } from "../cookie-config";

// Cookie yönetim fonksiyonları
export const getCookie = async (name: string) => {
  const cookieStore = cookies();
  return (await cookieStore).get(name);
};

export const setCookie = async (
  name: string,
  value: string,
  maxAge = COOKIE_EXPIRY.LONG
) => {
  const cookieStore = cookies();
  (await cookieStore).set(name, value, {
    ...COOKIE_OPTIONS,
    maxAge,
  });
};

export const deleteCookie = async (name: string) => {
  const cookieStore = cookies();
  (await cookieStore).delete(name);
};

// Cookie izin durumunu kontrol et
export const hasConsent = async () => {
  const consent = await getCookie(COOKIE_NAMES.CONSENT);
  return consent?.value === "true";
};
