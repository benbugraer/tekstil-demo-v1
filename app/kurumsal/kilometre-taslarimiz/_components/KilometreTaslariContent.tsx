"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

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
          Acar Tekstil, bireysel bir üretici marka olma vizyonuyla
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
          The Second Life Movement projesi hayata geçirildi. Sürdürülebilir
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
          Global Recycled Standard (GRS) sertifikası alındı. ISO 14001 Çevre
          Yönetim Sistemi sertifikası alındı.
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
          Tekstil Etiket ve Süslemeli hazırlanması rekabetçi rakip bünyesine
          yapılan yatırımlar artırıldı.
        </p>
      </motion.div>
    ),
  },
];

export default function KilometreTaslariContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] min-h-[400px] w-full"
      >
        <Image
          src="/factory/factory-4.jpg"
          alt="Tekstil Fabrikası Üretim Hattı"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center p-4 md:p-8 max-w-4xl mx-auto">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-white bg-white/10 backdrop-blur-sm rounded-md p-6 shadow-lg"
            >
              Kilometre Taşlarımız
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-primary-foreground"
            >
              1987&apos;den bugüne, duyarlı yaşam yolculuğumuzda attığımız her
              adım, geleceğe olan sorumluluğumuzun bir parçası.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <Timeline data={timelineData} />
    </div>
  );
}
