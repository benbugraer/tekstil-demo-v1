import TimelineContent from "./_components/Timeline";

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
  return <TimelineContent />;
}
