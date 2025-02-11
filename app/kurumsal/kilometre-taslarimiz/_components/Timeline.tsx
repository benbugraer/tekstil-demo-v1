"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import PagesSection from "@/components/sections/PagesSection";

const timelineData = [
  {
    title: "1987",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg"
      >
        <p className="text-neutral-700 dark:text-neutral-300">
          Tekstil Demo, bireysel bir üretici marka olma vizyonuyla
          faaliyetlerine başladı.
        </p>
      </motion.div>
    ),
  },
  {
    title: "1993",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg"
      >
        <p className="text-neutral-700 dark:text-neutral-300">
          Yenilikçi yaklaşımı ve kaliteye olan bağlılığıyla sektörde öncü firma
          konumuna gelme hedefiyle büyümeye devam etti.
        </p>
      </motion.div>
    ),
  },
  {
    title: "1997",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg"
      >
        <p className="text-neutral-700 dark:text-neutral-300">
          Geliştirilen modern performans ve birlikte Avrupa&apos;daki yeni
          pazarlara hizmetler sunuldu.
        </p>
      </motion.div>
    ),
  },
  {
    title: "2000",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg"
      >
        <p className="text-neutral-700 dark:text-neutral-300">
          Önemli büyüme ve sürdürülebilir üretim ile ihracatı artırarak dünya
          pazarında güç yeniledi.
        </p>
      </motion.div>
    ),
  },
  {
    title: "2010",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg"
      >
        <p className="text-neutral-700 dark:text-neutral-300">
          Üretim kapasitesini artırarak sektörde bürokrat konumunu
          sağlamlaştırdı.
        </p>
      </motion.div>
    ),
  },
  {
    title: "2020",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg"
      >
        <p className="text-neutral-700 dark:text-neutral-300">
          Teksitl Demo ile yeni tekstil projesi hayata geçirildi. Sürdürülebilir
          üretim hedefleri belirlendi.
        </p>
      </motion.div>
    ),
  },
  {
    title: "2021",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg"
      >
        <p className="text-neutral-700 dark:text-neutral-300">
          Tekstil Demo olarak Tekstil Sertifika 1 ve Teksil Sertifika 2 alındı
          ve üst düzey başarılarımıza bir yenisi eklendi
        </p>
      </motion.div>
    ),
  },
  {
    title: "2022",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg"
      >
        <p className="text-neutral-700 dark:text-neutral-300">
          Yeni nesil tekstil alanları ile ilgili ileri görüşlü yatırımlar
          yapıldı.
        </p>
      </motion.div>
    ),
  },
];

export default function TimelineContent() {
  return (
    <main className="min-h-screen bg-white">
      <PagesSection
        title="Kilometre Taşlarımız"
        description="1987'den bugüne, duyarlı yaşam yolculuğumuzda attığımız her adım, geleceğe olan sorumluluğumuzun bir parçası."
        imagePath="/factory/factory-4.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        <Timeline data={timelineData} />
      </div>
    </main>
  );
}
