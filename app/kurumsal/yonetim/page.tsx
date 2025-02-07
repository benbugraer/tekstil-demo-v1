import { Metadata } from "next";
import ManagementContent from "@/app/kurumsal/yonetim/_components/ManagementContent";

export const metadata: Metadata = {
  title: "Yönetim Kadromuz | Tekstil Fabrikası",
  description:
    "Şirketimizin başarısının arkasındaki deneyimli ve vizyoner ekibimiz ile sürdürülebilir büyüme ve inovasyonu hedefliyoruz. Yönetim kurulu, yürütme kurulu ve komitelerimiz hakkında detaylı bilgi edinin.",
  openGraph: {
    title: "Yönetim Kadromuz | Tekstil Fabrikası",
    description:
      "Şirketimizin başarısının arkasındaki deneyimli ve vizyoner ekibimiz ile sürdürülebilir büyüme ve inovasyonu hedefliyoruz.",
    images: [
      {
        url: "/factory/factory-3.jpg",
        width: 1200,
        height: 630,
        alt: "Tekstil Fabrikası Yönetim Kadrosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yönetim Kadromuz | Tekstil Fabrikası",
    description:
      "Şirketimizin başarısının arkasındaki deneyimli ve vizyoner ekibimiz ile sürdürülebilir büyüme ve inovasyonu hedefliyoruz.",
    images: ["/factory/factory-3.jpg"],
  },
  keywords: [
    "tekstil fabrikası yönetim",
    "yönetim kurulu",
    "yürütme kurulu",
    "tekstil yönetimi",
    "kurumsal yönetim",
    "sürdürülebilir büyüme",
    "tekstil inovasyon",
  ],
};

export default function Yonetim() {
  return <ManagementContent />;
}
