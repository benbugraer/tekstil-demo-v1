"use client";

import * as React from "react";
import Image from "next/image";
import { useCallback, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";
import { Cover } from "@/components/ui/cover";
import { cn } from "@/lib/utils";

// Types
interface Slide {
  image: string;
  title: string[];
  highlightIndex: number[];
  description: string;
  buttonText: string;
}

// Constants
const AUTOPLAY_DELAY = 5000;
const BUTTON_BASE_STYLES =
  "relative border-none rounded-full w-12 h-12 transition-all duration-200 group text-white";
const BUTTON_HOVER_STYLES =
  "hover:bg-[#DC2626] hover:text-white backdrop-blur-lg";

const slides: Slide[] = [
  {
    image: "/factory/factory-3.jpg",
    title: ["Modern Üretim", "Tesislerimiz", "Tekstilde", "Öncü Çözümler"],
    highlightIndex: [0],
    description:
      "En son teknoloji ile donatılmış tesislerimizde, yüksek kaliteli tekstil ürünleri üretiyoruz.",
    buttonText: "Fabrikamızı Keşfet",
  },
  {
    image: "/brands/brand-2.jpg",
    title: ["Premium", "Kumaşlar", "Mükemmel", "Tekstil Deneyimi"],
    highlightIndex: [3],
    description:
      "Premium kumaşlarımızla en üst düzey tekstil işçiliğini deneyimleyin.",
    buttonText: "ÜRÜNLERİ KEŞFEDİN",
  },
  {
    image: "/jungle/nature-jungle-1.jpg",
    title: ["Sürdürülebilir", "Tekstil", "Yenilikçi", "Yaklaşımlar"],
    highlightIndex: [2],
    description:
      "Doğa bizim geleceğimiz bu yüzden çevre dostu tekstil üretiminde öncü yaklaşımımız.",
    buttonText: "DAHA FAZLA BİLGİ",
  },
  {
    image: "/sewing/sewing-1.jpg",
    title: ["Global", "Tekstil", "Çözümleri", "Dünyaya"],
    highlightIndex: [0],
    description: "Uluslararası tekstil ticaretinde güvenilir çözüm ortağınız.",
    buttonText: "BİZE ULAŞIN",
  },
];

// Components
const SlideContent: React.FC<{ slide: Slide }> = ({ slide }) => {
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="container relative z-10 h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 text-center"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={containerVariants}
        >
          <motion.h2
            className="text-white text-4xl md:text-6xl font-bold leading-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2"
            variants={itemVariants}
          >
            {slide.title.map((word, idx) =>
              slide.highlightIndex.includes(idx) ? (
                <Cover
                  key={idx}
                  className="text-white font-bold text-4xl md:text-6xl"
                >
                  {word}
                </Cover>
              ) : (
                <span key={idx} className="inline-block">
                  {word}
                </span>
              )
            )}
          </motion.h2>
          <motion.p
            className="text-primary-foreground text-xl md:text-2xl max-w-3xl"
            variants={itemVariants}
          >
            {slide.description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className={cn(
                "bg-[#DC2626] text-white text-base px-4 py-3 rounded-md",
                "hover:bg-white hover:text-[#DC2626]",
                "transition-colors duration-300 ease-linear",
                "hover:shadow-lg hover:shadow-black/20"
              )}
            >
              {slide.buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const NavigationDots: React.FC<{
  slides: Slide[];
  current: number;
  api?: CarouselApi;
}> = ({ slides, current, api }) => {
  return (
    <div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20"
      role="tablist"
    >
      {slides.map((slide, index) => (
        <button
          key={index}
          className={cn(
            "h-3 rounded-full transition-all",
            current === index
              ? "bg-[#DC2626] w-12"
              : "w-3 bg-white/50 hover:bg-white"
          )}
          onClick={() => api?.scrollTo(index)}
          role="tab"
          aria-label={`Slide ${index + 1}: ${slide.title.join(" ")}`}
          aria-selected={current === index}
        />
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const plugin = useMemo(
    () =>
      Autoplay({
        delay: AUTOPLAY_DELAY,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  const renderSlide = useCallback(
    (slide: Slide, index: number) => (
      <CarouselItem
        key={index}
        className="relative w-full min-h-[500px] h-[calc(100vh-140px)] flex flex-col"
      >
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.title.join(" ")}
            fill
            className="object-cover object-center brightness-[0.4] transition-all duration-300"
            priority={index === 0}
            quality={90}
            sizes="(max-width: 640px) 100vw, 
                   (max-width: 1024px) 100vw,
                   100vw"
            loading={index === 0 ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"
            aria-hidden="true"
          />
        </div>
        <SlideContent
          slide={slide}
          // Remove className prop since it's not accepted by SlideContent component
          // according to the type error
        />
      </CarouselItem>
    ),
    []
  );

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        plugins={[plugin]}
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="h-full"
      >
        <CarouselContent className="h-full">
          {slides.map(renderSlide)}
        </CarouselContent>

        <NavigationDots slides={slides} current={current} api={api} />

        <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-between w-full px-4 md:px-14">
          <CarouselPrevious
            className={cn(
              BUTTON_BASE_STYLES,
              BUTTON_HOVER_STYLES,
              "bg-white/10"
            )}
            aria-label="Önceki slayt"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          </CarouselPrevious>
          <CarouselNext
            className={cn(
              BUTTON_BASE_STYLES,
              BUTTON_HOVER_STYLES,
              "bg-white/10"
            )}
            aria-label="Sonraki slayt"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </CarouselNext>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
