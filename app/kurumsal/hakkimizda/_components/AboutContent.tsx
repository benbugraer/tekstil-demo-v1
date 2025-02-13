"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Heart,
  Users2,
  BarChart3,
  Gem,
  ShoppingBag,
  Leaf,
  Recycle,
  Factory,
  Award,
} from "lucide-react";
import { PagesSection } from "@/components/sections/PagesSection";
import Section from "@/components/sections/Section";
import { HiOutlineCheck } from "react-icons/hi";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutContent() {
  return (
    <main>
      <PagesSection
        title="Hakkımızda"
        description="40 yılı aşkın tecrübemizle tekstil sektöründe kalite ve güvenin adresi"
        backgroundImage="/factory/factory-1.jpg"
        breadcrumbs={[
          { label: "Kurumsal", href: "/kurumsal" },
          { label: "Hakkımızda" },
        ]}
      />

      {/* Hakkımızda İçerik Bölümü */}
      <Section
        title="Hakkımızda"
        subtitle="Tekstil Sektöründe Güvenilir Çözüm Ortağınız"
        description="1980 yılından bu yana tekstil sektöründe faaliyet gösteren firmamız, yenilikçi üretim teknolojileri ve sürdürülebilir iş modelleriyle sektörde öncü konumda yer almaktadır."
        className="py-16 md:py-24 bg-white"
      >
        {/* Görsel Galerisi */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/factory/factory-2.jpg"
              alt="Modern üretim tesislerimiz"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/factory/factory-3.jpg"
              alt="Kalite kontrol süreçlerimiz"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/factory/factory-4.jpg"
              alt="Profesyonel ekibimiz"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Misyon & Vizyon */}
        <Section title="Kurumsal" subtitle="Misyon & Vizyon" className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[#DC2626] mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Misyonumuz</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Sürdürülebilir ve yenilikçi üretim teknolojileriyle,
                müşterilerimize en kaliteli tekstil ürünlerini sunmak, sektörde
                öncü ve güvenilir bir marka olmak için çalışmak.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-4">
                <Gem className="w-8 h-8 text-[#DC2626] mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Vizyonumuz</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Global tekstil pazarında lider konuma ulaşarak, yenilikçi ve
                sürdürülebilir ürünlerimizle dünya standartlarında hizmet
                sunmak.
              </p>
            </div>
          </div>
        </Section>

        {/* Değerlerimiz */}
        <Section
          title="Değerlerimiz"
          subtitle="Toplumsal Değerlerimiz"
          description="Sürdürülebilir ve etik iş prensipleriyle, topluma ve çevreye karşı sorumluluklarımızı yerine getiriyoruz."
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#DC2626] p-6 rounded-xl shadow-xl border border-gray-100">
              <Heart className="w-12 h-12 text-white mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">
                Sürdürülebilirlik
              </h4>
              <p className="text-primary-foreground">
                Çevreye duyarlı üretim süreçleri ve sürdürülebilir kaynak
                kullanımı ile gelecek nesillere yaşanabilir bir dünya bırakmak.
              </p>
            </div>
            <div className="bg-[#DC2626] p-6 rounded-xl shadow-xl border border-gray-100">
              <Users2 className="w-12 h-12 text-white mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">
                İnsan Odaklılık
              </h4>
              <p className="text-primary-foreground">
                Çalışanlarımızın ve toplumumuzun refahını gözeterek, sosyal
                sorumluluk bilinciyle hareket etmek.
              </p>
            </div>
            <div className="bg-[#DC2626] p-6 rounded-xl shadow-xl border border-gray-100">
              <BarChart3 className="w-12 h-12 text-white mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">
                Sürekli Gelişim
              </h4>
              <p className="text-primary-foreground">
                Teknolojik yenilikleri takip ederek, üretim süreçlerimizi
                sürekli iyileştirmek ve verimliliği artırmak.
              </p>
            </div>
          </div>
        </Section>

        {/* Faaliyetlerimiz */}
        <Section
          title="Faaliyetler"
          subtitle="Faaliyetlerimiz"
          description="Modern üretim tesislerimiz ve geniş ürün yelpazemizle tekstil sektörüne yön veriyoruz."
        >
          <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Factory className="w-6 h-6 text-[#DC2626] mr-2" />
                  Üretim Tesislerimiz
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <HiOutlineCheck className="w-4 h-4 text-[#DC2626]/70" />
                    20.000 m² kapalı üretim alanı
                  </li>
                  <li className="flex items-center gap-2">
                    <HiOutlineCheck className="w-4 h-4 text-[#DC2626]/70" />
                    Modern makine parkuru
                  </li>
                  <li className="flex items-center gap-2">
                    <HiOutlineCheck className="w-4 h-4 text-[#DC2626]/70" />
                    Günlük 50.000 metre kumaş üretim kapasitesi
                  </li>
                  <li className="flex items-center gap-2">
                    <HiOutlineCheck className="w-4 h-4 text-[#DC2626]/70" />
                    İleri teknoloji laboratuvar altyapısı
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <ShoppingBag className="w-6 h-6 text-[#DC2626] mr-2" />
                  Ürün Yelpazemiz
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#DC2626]/70" />
                    Örme kumaşlar
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#DC2626]/70" />
                    Dokuma kumaşlar
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#DC2626]/70" />
                    Teknik tekstiller
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#DC2626]/70" />
                    Özel tasarım ürünler
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Leaf className="w-6 h-6 text-[#DC2626] mr-2" />
                  Sürdürülebilir Üretim
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Recycle className="w-4 h-4 text-[#DC2626]/70" />
                    Geri dönüştürülebilir malzeme kullanımı
                  </li>
                  <li className="flex items-center gap-2">
                    <Recycle className="w-4 h-4 text-[#DC2626]/70" />
                    Su tasarrufu sağlayan üretim süreçleri
                  </li>
                  <li className="flex items-center gap-2">
                    <Recycle className="w-4 h-4 text-[#DC2626]/70" />
                    Enerji verimliliği odaklı sistemler
                  </li>
                  <li className="flex items-center gap-2">
                    <Recycle className="w-4 h-4 text-[#DC2626]/70" />
                    Sıfır atık politikası
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </Section>
    </main>
  );
}
