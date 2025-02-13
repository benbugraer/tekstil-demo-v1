import { Metadata } from "next";
import ContactContent from "./_components/ContactContent";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Tekstil Demo firması iletişim bilgileri, adres ve harita bilgileri",
  openGraph: {
    title: "İletişim - Tekstil Demo",
    description:
      "Tekstil Demo firması iletişim bilgileri, adres ve harita bilgileri",
    images: ["/factory/factory-1.jpg"],
  },
};

export default function IletisimPage() {
  return <ContactContent />;
}
