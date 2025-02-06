"use client";

import { FeatureSteps } from "./features-section";
import Section from "../Section";

const features = [
  {
    step: "Step 1",
    title: "Gelişmiş fabrikalarımızda ürünlerimizi üretiyoruz",
    content:
      "Fabrikalarımızda temiz üretime özen gösteriyor ürünlerin en güzel şekilde fabrikamızdan çıktığından emin oluyoruz.",
    image: "/factory/factory-1.jpg",
  },
  {
    step: "Step 2",
    title: "Yüksek kaliteli ürünler.",
    content:
      "Ürünlerimizin kalitesini korumak için en yüksek kalite standartlarını takip ediyoruz.",
    image: "/brands/brand-1.jpg",
  },
  {
    step: "Step 3",
    title: "Süreklilik",
    content:
      "Ürünlerimizin kalitesini korumak için en yüksek kalite standartlarını takip ediyoruz.",
    image: "/sewing/sewing-1.jpg",
  },
];

function FeatureStepsDemo() {
  return (
    <Section
      subtitle="Kendimizden Eminiz Kalitemize Güveniyoruz"
      title="Çalışmalarımız Güvencemiz"
      description="Çalışmalarımızın güvence altında olması için en yüksek kalite standartlarını takip ediyoruz."
      className="w-full py-20 lg:py-40 bg-secondary"
    >
      <FeatureSteps features={features} autoPlayInterval={4000} />
    </Section>
  );
}

export default FeatureStepsDemo;
