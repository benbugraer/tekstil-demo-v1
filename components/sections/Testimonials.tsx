"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Section from "./Section";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmet Yılmaz",
    role: "Üretim Müdürü",
    avatar: "/images/avatar.png",
    content:
      "Tekstil sektöründe kalite ve güvenilirlik çok önemlidir. Bu firma ile çalışmak her zaman güven verici ve profesyonel bir deneyim oldu.",
  },
  {
    name: "Ayşe Kaya",
    role: "Tedarik Zinciri Direktörü",
    avatar: "/images/avatar.png",
    content:
      "Üretim süreçlerindeki hassasiyetleri ve müşteri odaklı yaklaşımları gerçekten takdire şayan. Sektörde örnek gösterilecek bir firma.",
  },
  {
    name: "Mehmet Demir",
    role: "Kalite Kontrol Uzmanı",
    avatar: "/images/avatar.png",
    content:
      "Modern üretim tesisleri ve profesyonel ekipleriyle sektörde fark yaratıyorlar. İş birliğimizden çok memnunuz.",
  },
  {
    name: "Zeynep Şahin",
    role: "Satın Alma Müdürü",
    avatar: "/images/avatar.png",
    content:
      "Teslimat süreleri ve ürün kalitesindeki tutarlılıkları ile her zaman güvenilir bir iş ortağı oldular.",
  },
  {
    name: "Can Özkan",
    role: "Genel Müdür",
    avatar: "/images/avatar.png",
    content:
      "Yenilikçi yaklaşımları ve sürdürülebilir üretim politikaları ile sektöre yön veren bir firma. Uzun yıllardır başarılı iş birliğimiz devam ediyor.",
  },
];

const animations = {
  testimonial: {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  },
  content: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  },
};

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const NavigationButton = ({ direction, onClick }: NavigationButtonProps) => {
  const isNext = direction === "next";

  return (
    <button
      onClick={onClick}
      className={clsx(
        "absolute top-1/2 transform -translate-y-1/2 cursor-pointer focus:outline-none z-10",
        "transition-all duration-300 ease-in-out",
        isNext ? "right-2 md:-right-16" : "left-2 md:-left-16"
      )}
      aria-label={`${isNext ? "Next" : "Previous"} testimonial`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          "relative bg-[#dc2626] hover:bg-neutral-200/65",
          "border-none rounded-full w-12 h-12",
          "transition-all duration-200 group",
          "text-white hover:text-[#dc2626]",
          "backdrop-blur-lg flex items-center justify-center"
        )}
      >
        {isNext ? (
          <ArrowRight className="w-6 h-6 " />
        ) : (
          <ArrowLeft className="w-6 h-6 " />
        )}
      </motion.div>
    </button>
  );
};

const TestimonialContent = ({ testimonial }: { testimonial: Testimonial }) => (
  <>
    <motion.div
      variants={animations.content}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="mb-8"
    >
      <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-xl">
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        <AvatarFallback className="text-2xl">
          {testimonial.name[0]}
        </AvatarFallback>
      </Avatar>
    </motion.div>
    <motion.blockquote
      variants={animations.content}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-xl text-foreground mb-8 italic"
    >
      &ldquo;{testimonial.content}&rdquo;
    </motion.blockquote>

    <motion.div
      variants={animations.content}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h4 className="font-semibold text-sm text-gray-900">
        {testimonial.name}
      </h4>
      <p className="text-[#dc2626] font-medium mt-1">{testimonial.role}</p>
    </motion.div>
  </>
);

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialIndex = Math.abs(page % testimonials.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Section
      title="REFERANSLAR"
      subtitle="Müşterilerimiz Ne Diyor?"
      description="Müşterilerimizin bizimle çalışmalarından sonra bize verdiği geri dönüşler."
    >
      <div className="relative max-w-4xl mx-auto mt-12 px-8 md:px-0">
        <NavigationButton direction="prev" onClick={() => paginate(-1)} />
        <NavigationButton direction="next" onClick={() => paginate(1)} />

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={animations.testimonial}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="text-center"
            >
              <TestimonialContent
                testimonial={testimonials[testimonialIndex]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
