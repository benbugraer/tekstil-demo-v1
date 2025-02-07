"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-neutral-50">
      <div className="container px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <h1 className="text-9xl font-bold text-[#DC2626]">404</h1>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Sayfa Bulunamadı
          </h2>
          <p className="text-lg text-neutral-600">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="bg-[#DC2626] hover:bg-[#DC2626]/90 text-white px-8"
            >
              <Link href="/">Ana Sayfaya Dön</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white"
            >
              <Link href="/iletisim">Bize Ulaşın</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
