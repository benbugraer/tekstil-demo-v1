import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Footer from "@/components/sections/Footer";
// import ClientCookieConsent from "@/components/client/cookie-consent-wrapper";
import Navigation from "@/components/sections/Navigation/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
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
    url: "https://tekstil-demo-website-v1-bugra-er.vercel.app/",
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
      "tr-TR": "https://tekstil-demo-website-v1-bugra-er.vercel.app/tr",
      "en-US": "https://tekstil-demo-website-v1-bugra-er.vercel.app/en",
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
      <body
        className={clsx(
          "antialiased relative suppressHydrationWarning ",
          poppins.className
        )}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        {/* <ClientCookieConsent /> */}
      </body>
    </html>
  );
}
