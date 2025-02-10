"use client";

import dynamic from "next/dynamic";

// Navigation components
export const Navigation = dynamic(
  () => import("../components/sections/Navigation/Navigation"),
  {
    ssr: true,
    loading: () => null,
  }
);

// Footer component
export const Footer = dynamic(() => import("../components/sections/Footer"), {
  ssr: true,
  loading: () => null,
});

// Hero component
export const Hero = dynamic(() => import("../components/sections/Hero"), {
  ssr: true,
  loading: () => null,
});

// Import Embla Carousel
export const Carousel = dynamic(
  () => import("../components/ui/embla-carousel-wrapper"),
  { ssr: false }
);

// Import Swiper
export const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);

// Import CountUp
export const CountUp = dynamic(() => import("react-countup"), { ssr: false });
