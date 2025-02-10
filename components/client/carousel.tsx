"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  children: React.ReactNode;
  options?: {
    loop?: boolean;
    align?: "start" | "center" | "end";
    slidesToScroll?: number;
    containScroll?: "trimSnaps" | "keepSnaps";
  };
}

const Carousel: React.FC<CarouselProps> = ({ children, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};

export default Carousel;
