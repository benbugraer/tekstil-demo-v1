"use client";

import dynamic from "next/dynamic";

export const Carousel = dynamic(
  () => import("@/components/ui/embla-carousel-wrapper"),
  {
    loading: () => (
      <div className="animate-pulse h-64 bg-gray-200 rounded-lg" />
    ),
  }
);

export const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  {
    loading: () => (
      <div className="animate-pulse h-64 bg-gray-200 rounded-lg" />
    ),
  }
);

export const CountUp = dynamic(() => import("react-countup"), {
  loading: () => <div className="animate-pulse h-8 w-20 bg-gray-200 rounded" />,
});
