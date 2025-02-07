"use client";

import * as React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
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

interface Slide {
  image: string;
  title: string[];
  highlightIndex: number[];
  description: string;
  buttonText: string;
}

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

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel
        className="w-full h-full"
        plugins={[plugin]}
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative w-full h-screen">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title.join(" ")}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLyAvLTMpNEA4SDQ/OzJATDk9T1FXYWFgOUlUbWJJXWFf/2wBDARUXFyAeIB4gHh4gH19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                  <div className="max-w-5xl mx-auto space-y-8">
                    <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
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
                    </h2>
                    <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      className="bg-[#DC2626] hover:bg-white hover:text-[#DC2626] text-white text-lg px-8 py-6 rounded-md ease-linear duration-200 transition-colors hover:shadow-lg hover:shadow-black/20"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20"
          role="tablist"
        >
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-[#DC2626] w-12"
                  : "bg-white/50 hover:bg-white"
              }`}
              onClick={() => api?.scrollTo(index)}
              role="tab"
              aria-label={`Slide ${index + 1}: ${slide.title.join(" ")}`}
              aria-selected={current === index}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-between w-full px-4 md:px-14">
          <CarouselPrevious
            className="relative bg-white/10 hover:bg-[#DC2626] border-none rounded-full w-12 h-12 transition-all duration-200 group text-white hover:text-white backdrop-blur-lg"
            aria-label="Önceki slayt"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          </CarouselPrevious>
          <CarouselNext
            className="relative bg-white/10 hover:bg-[#DC2626] border-none rounded-full w-12 h-12 transition-all duration-200 group text-white hover:text-white backdrop-blur-lg"
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
