"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

const features = [
  "Mevcut Pazar Trendleri",
  "Rayon kumaş toptancısı",
  "Küresel kumaş dağıtıcısı",
  "Biyolojik olarak test edilmiş kumaşlar",
  "En İyi İhracatçı Ödülüne Layık Görüldü",
  "İstikrarlı ortak küresel tekstil",
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-neutral-100"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const WhoWeAre = () => {
  return (
    <section className="w-full py-24 bg-[#DC2626] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative grid grid-cols-2 gap-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[300px] w-full"
            >
              <Image
                src="/worker/worker-1.jpg"
                alt="Tekstil çalışanı"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] w-full mt-8"
            >
              <Image
                src="/textile/textile-1.jpg"
                alt="Tekstil makinesi"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-neutral-100"
          >
            <div className="space-y-2">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-medium tracking-wide uppercase bg-neutral-50 px-4 py-2 rounded-md inline-block text-[#DC2626]"
              >
                BİZ KİMİZ
              </motion.h3>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold"
              >
                1970&apos;Den Beri Pazardaki En İyi Tekstil Markası
              </motion.h2>
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="leading-relaxed text-neutral-50"
            >
              1970 yılında kurulan ve doğal ve organik kumaşların yeni ve şık
              yorumlarıyla tanınan bir tekstil üreticisiyiz. Tüm kumaşlarımız
              kendi dokuma fabrikamızda tasarlanır ve dokunur.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 * index }}
                  className="flex items-center gap-2"
                >
                  <CheckIcon />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 pt-6"
            >
              <Link href="/kurumsal/hakkimizda" prefetch={true}>
                <Button
                  variant="default"
                  className="bg-neutral-100 hover:bg-neutral-900 hover:text-neutral-100 text-[#DC2626] px-6 py-2 rounded-md font-medium ease-linear duration-300 transition-colors hover:shadow-lg hover:shadow-black/20"
                >
                  DAHA FAZLA
                </Button>
              </Link>
              <Link href="/iletisim" prefetch={true}>
                <Button className="text-neutral-100 hover:bg-neutral-100 hover:text-[#DC2626] rounded-md borer-none ease-linear duration-300 transition-colors hover:shadow-lg hover:shadow-black/20">
                  BİZE ULAŞIN
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
