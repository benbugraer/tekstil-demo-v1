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

const slides = [
  {
    image: "/factory/factory-3.jpg",
    title: "Where Elegance",
    subtitle: "Meeting Class",
    highlight: "Textile",
    description:
      "When select the best of your choice sucks, let our fabrics be an exception!",
    buttonText: "DISCUSS A PROJECT",
  },
  {
    image: "/brands/brand-2.jpg",
    title: "Quality in",
    subtitle: "Every Thread",
    highlight: "Excellence",
    description:
      "Experience the finest textile craftsmanship with our premium fabrics.",
    buttonText: "EXPLORE PRODUCTS",
  },
  {
    image: "/jungle/nature-jungle-1.jpg",
    title: "Sustainable",
    subtitle: "Fashion Future",
    highlight: "Innovation",
    description: "Leading the way in eco-friendly textile manufacturing.",
    buttonText: "LEARN MORE",
  },
  {
    image: "/sewing/sewing-1.jpg",
    title: "Global Textile",
    subtitle: "Solutions",
    highlight: "Worldwide",
    description: "Your trusted partner in international textile trade.",
    buttonText: "CONTACT US",
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
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-white text-6xl md:text-8xl font-bold leading-tight">
                        {slide.title}
                      </h2>
                      <h2 className="text-white text-6xl md:text-8xl font-bold leading-tight">
                        {slide.subtitle}
                      </h2>
                    </div>
                    <div className="text-[#DC2626] text-7xl md:text-9xl font-bold opacity-80">
                      {slide.highlight}
                    </div>
                    <p className="text-white/90 text-xl md:text-2xl max-w-2xl">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-lg px-8 py-6 rounded-md"
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-[#DC2626] w-12"
                  : "bg-white/50 hover:bg-white"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-between w-full px-4 md:px-14">
          <CarouselPrevious className="relative bg-white/10 hover:bg-[#DC2626] border border-neutral-900 rounded-full w-14 h-14 transition-all duration-300 group text-white hover:text-white">
            <ChevronLeft className="w-6 h-6transition-transform group-hover:-translate-x-1" />
          </CarouselPrevious>
          <CarouselNext className="relative bg-white/10 hover:bg-[#DC2626] border-none rounded-full w-14 h-14 transition-all duration-300 group text-white hover:text-w">
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </CarouselNext>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
