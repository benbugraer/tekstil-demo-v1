"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { GameIconsSewingMachine } from "@/public/icons/sewing-icon";
import { HeroiconsSolidColorSwatch } from "@/public/icons/color-swatch-icon";
import { FluentDesignIdeas24Filled } from "@/public/icons/design-icon";
import { LaIndustry } from "@/public/icons/industry-icon";

const qualityItems = [
  {
    id: 1,
    icon: <GameIconsSewingMachine className="w-8 h-8" />,
    title: "Kumaş İşlemi",
    description:
      "Yeniden dokuma ve dikiş onarım detayları dahil sabitleme işlemlerini gerçekleştiriyoruz.",
  },
  {
    id: 2,
    icon: <FluentDesignIdeas24Filled className="w-8 h-8" />,
    title: "Sanatsal Yöntmenlik",
    description:
      "Toplama stratejilerine, depolamaya, uygulamaya ve zararlı üretim yönetimine yardımcı olun.",
  },
  {
    id: 3,
    icon: <LaIndustry className="w-8 h-8" />,
    title: "Saten Dokuma",
    description:
      "Mümkün olduğunca az çözgü kesintisi olan, sürekli atkı ipliği.",
  },
  {
    id: 4,
    icon: <HeroiconsSolidColorSwatch className="w-8 h-8" />,
    title: "Kumaş Boyama",
    description:
      "Boyaların sulu çözeltiden elyaf yüzeyine transferi ve difüzyonu.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Quality() {
  return (
    <Section
      title="ENDÜSTRİLER & ÜRETİM"
      subtitle="Ayrıcalıklı Kaliteyi Yaşayalım"
      description="Ayrıcalıklı kaliteyi yaşamak için en yüksek kalite standartlarını takip ediyoruz."
      className="py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {qualityItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group relative bg-white p-8 rounded-md shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/90"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-block p-4 bg-red-50 rounded-xl text-[#DC2626] group-hover:bg-red-600/90 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-50/0 to-red-50/0 group-hover:from-red-50/50 group-hover:to-red-50/10 rounded-md transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
