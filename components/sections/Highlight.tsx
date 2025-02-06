"use client";
import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { Fa6SolidHandshake } from "@/public/icons/hand-shake-icon";
import { FluentGlobeClock24Filled } from "@/public/icons/clock-world-icon";
import { MdiCompany } from "@/public/icons/company-icon";
import { Fa6SolidPeopleGroup } from "@/public/icons/worker-icon";

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  hasPlus?: boolean;
  inView: boolean;
}

const StatCard = ({
  icon: Icon,
  value,
  label,
  hasPlus = false,
  inView,
}: StatCardProps) => (
  <div className="text-center space-y-3">
    <div className="flex justify-center">
      <Icon className="w-12 h-12 text-[#DC2626] bg-neutral-100 rounded-md p-2" />
    </div>
    <div className="text-4xl font-bold text-white">
      {inView && (
        <CountUp
          end={value}
          duration={2.5}
          separator={label === "Kuruluş Yılı" ? "" : ","}
        />
      )}
      {hasPlus && "+"}
    </div>
    <p className="text-primary-foreground">{label}</p>
  </div>
);

const stats = [
  {
    icon: MdiCompany,
    value: 1970,
    label: "Kuruluş Yılı",
    hasPlus: false,
  },
  {
    icon: Fa6SolidPeopleGroup,
    value: 3200,
    label: "Çalışan",
    hasPlus: true,
  },
  {
    icon: Fa6SolidHandshake,
    value: 200,
    label: "İştirakler",
    hasPlus: true,
  },
  {
    icon: FluentGlobeClock24Filled,
    value: 30,
    label: "Yıllık Tecrübe",
    hasPlus: true,
  },
];

const Highlight = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-[#dc2626] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left Content */}
          <motion.div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-[#DC2626] bg-neutral-100 rounded-md  p-2 font-medium  uppercase inline-block">
                İYİ TASARLANMIŞ
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Biz Sadece Dikişli Kumaştan Daha Fazlasını Sağlıyoruz
              </h3>
              <p className="text-primary-foreground leading-relaxed">
                Fablio, tekstil sektöründeki en büyük aktörler arası
                karşılaştırma girişimidir. Giyim malzemesi ve ev tekstili
                sektörünün daha sürdürülebilir malzeme kaynaklarına doğru
                ilerlemesini ve küresel çabayla uyumunu izler. Düzenli üretimin
                yanı sıra en büyük ihracatçı oldu.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} inView={inView} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/textile/textile-1.jpg"
              alt="Tekstil Üretimi"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlight;
