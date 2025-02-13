import TimelineContent from "./_components/Timeline";
import { PagesSection } from "@/components/sections/PagesSection";

export const metadata = {
  title: "Kilometre Taşlarımız",
  description:
    "1987'den bugüne tekstil sektöründeki yolculuğumuz ve başarı hikayemiz. Kilometre taşlarımızla sürdürülebilir ve yenilikçi üretim.",
  openGraph: {
    title: "Kilometre Taşlarımız | Tekstil Fabrikası",
    description:
      "1987'den bugüne tekstil sektöründeki yolculuğumuz ve başarı hikayemiz. Kilometre taşlarımızla sürdürülebilir ve yenilikçi üretim.",
    images: ["/images/kilometre-taslari.jpg"],
  },
};

export default function KilometreTaslarimiz() {
  return (
    <>
      <PagesSection
        title="Kilometre Taşlarımız"
        description="1987'den bugüne tekstil sektöründeki yolculuğumuz ve başarı hikayemiz. Kilometre taşlarımızla sürdürülebilir ve yenilikçi üretim."
        backgroundImage="/sewing/sewing-2.jpg"
        breadcrumbs={[
          { label: "Kurumsal", href: "/kurumsal" },
          { label: "Kilometre Taşlarımız" },
        ]}
      />
      <TimelineContent />
    </>
  );
}
