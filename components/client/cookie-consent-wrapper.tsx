"use client";

import dynamic from "next/dynamic";

const CookieConsent = dynamic(() => import("@/components/ui/cookie-consent"), {
  ssr: false,
  loading: () => null,
});

export default function ClientCookieConsent() {
  return <CookieConsent />;
}
