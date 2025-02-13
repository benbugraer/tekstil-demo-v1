import { Metadata } from "next";
import { AboutContent } from "./_components/AboutContent";

export const metadata: Metadata = {
  title: "Hakkımızda | Tekstil Fabrikası - Kalite ve Güvenin Adresi",
  description:
    "40 yılı aşkın tecrübemizle tekstil sektöründe öncü firma olarak, yenilikçi üretim teknolojilerimiz ve sürdürülebilir iş modelimizle müşterilerimize en kaliteli hizmeti sunuyoruz.",
  keywords: [
    "tekstil fabrikası",
    "sürdürülebilir tekstil",
    "türk tekstili",
    "kaliteli kumaş",
    "tekstil üretimi",
    "kurumsal tekstil",
  ],
  openGraph: {
    title: "Hakkımızda | Tekstil Fabrikası",
    description:
      "40 yılı aşkın tecrübemizle tekstil sektöründe öncü firma olarak hizmet veriyoruz.",
    images: ["/factory/factory-1.jpg"],
  },
};

export default function Hakkimizda() {
  return <AboutContent />;
}
