"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const animationConfig = {
  container: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
};

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ icon, label }: SocialLinkProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        asChild
        className="hover:bg-[#DC2626] hover:text-white transition-colors duration-300 ease-in-out"
      >
        <Button variant="outline" size="icon" className="rounded-full">
          {icon}
          <span className="sr-only">{label}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}&apos;ta bizi takip edin</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const CompanyInfo = () => (
  <motion.div className="relative" variants={animationConfig.item}>
    <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-100">
      TEKSTİL DEMO
    </h2>
    <p className="mb-6 text-primary-foreground">
      Tekstil Fabrikası, Türkiye&apos;deki en büyük tekstil fabrikalarından
    </p>
    <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
  </motion.div>
);

const QuickLinks = () => (
  <motion.div variants={animationConfig.item}>
    <h3 className="mb-4 text-lg font-semibold text-neutral-100">
      Hızlı Erişim
    </h3>
    <nav className="space-y-2 text-sm text-neutral-100">
      {[
        { href: "/", label: "Ana Sayfa" },
        { href: "/kurumsal/hakkimizda", label: "Hakkımızda" },
        { href: "/hizmetlerimiz/moda-tasarim", label: "Hizmetlerimiz" },
        { href: "/surdurulebilirlik", label: "Sürdürülebilirlik" },
        { href: "/iletisim", label: "İletişim" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex transition-colors hover:text-neutral-950 text-neutral-100 ease-linear duration-300"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </motion.div>
);

const ContactInfo = () => (
  <motion.div variants={animationConfig.item}>
    <h3 className="mb-4 text-lg font-semibold text-neutral-100">İletişim</h3>
    <address className="space-y-2 text-sm not-italic text-neutral-100">
      <p>Organize Sanayi Bölgesi</p>
      <p>1. Cadde No: 123</p>
      <p>İstanbul, Türkiye</p>

      <p>Telefon: +90 (212) 456 78 90</p>
      <p>E-posta: info@tekstilfabrikasi.com</p>
    </address>
  </motion.div>
);

const SocialLinks = () => (
  <motion.div className="relative" variants={animationConfig.item}>
    <h3 className="mb-4 text-lg font-semibold text-neutral-100">
      Sosyal Medya
    </h3>
    <div className="mb-6 flex space-x-4">
      <SocialLink icon={<Facebook className="h-4 w-4" />} label="Facebook" />
      <SocialLink icon={<Twitter className="h-4 w-4" />} label="Twitter" />
      <SocialLink icon={<Instagram className="h-4 w-4" />} label="Instagram" />
      <SocialLink icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
    </div>
  </motion.div>
);

const FooterBottom = () => (
  <motion.div
    variants={animationConfig.item}
    className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row"
  >
    <p className="text-sm text-primary-foreground">
      © 2024 Tekstil Fabrikası. Tüm hakları saklıdır.
    </p>
    <nav className="flex gap-4 text-sm">
      {[
        { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
        { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
        { href: "/cerez-politikasi", label: "Çerez Politikası" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-neutral-100 ease-linear duration-300 transition-colors hover:text-neutral-950"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </motion.div>
);

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animationConfig.container}
      className="relative border-t bg-[#DC2626] text-foreground transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <CompanyInfo />
          <QuickLinks />
          <ContactInfo />
          <SocialLinks />
        </div>
        <FooterBottom />
      </div>
    </motion.footer>
  );
}
