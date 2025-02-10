import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import dynamic from "next/dynamic";

// Server components
const Navigation = dynamic(
  () => import("@/components/sections/Navigation/Navigation")
);
const Footer = dynamic(() => import("@/components/sections/Footer"));

// Client components with client-side wrapper
const ClientCookieConsent = dynamic(
  () => import("@/components/client/cookie-consent-wrapper")
);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tekstil-demo.vercel.app/"),
  title: {
    default: "Anasayfa | Tekstil Demo",
    template: "%s | Tekstil Demo",
  },
  description: "Tekstil demo website açıklama kısmı.",
  keywords: [
    "Tekstil",
    "Demo",
    "Website",
    "Kıyafet",
    "Üretim",
    "Tasarım",
    "İplik",
    "Kumaş",
    "Kurumsal",
    "Hizmetlerimiz",
    "İletişim",
    "Sürdürülebilirlik",
  ],
  authors: [{ name: "Buğra Er", url: "https://tekstil-demo.vercel.app" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo/android-chrome-192x192.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo/android-chrome-192x192.png",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
  },
  other: {
    referrer: "origin-when-cross-origin",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Tekstil Demo",
    "format-detection": "telephone=no",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://tekstil-demo.vercel.app/",
    title: "Tekstil Demo Website",
    description: "Tekstil demo website açıklama kısmı.",
    siteName: "Tekstil Demo Website",
    images: [
      {
        url: "/logo/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Tekstil Demo Website Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekstil Demo | Tekstil Demo Projesi",
    description: "Tekstil Demo Projesi tanıtım sayfası",
    images: ["/logo/android-chrome-192x192.png"],
    creator: "@tekstil-demo",
    site: "@tekstil-demo",
  },
  alternates: {
    canonical: "https://tekstil-demo.vercel.app",
    languages: {
      "tr-TR": "https://tekstil-demo.vercel.app/tr",
      "en-US": "https://tekstil-demo.vercel.app/en",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com"
        />
      </head>
      <body className={clsx("antialiased relative", poppins.className)}>
        <Navigation />
        <main className="max-w-[2100px]">{children}</main>
        <Footer />
        <ClientCookieConsent />
      </body>
    </html>
  );
}
