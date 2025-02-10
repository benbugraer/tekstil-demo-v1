import dynamic from "next/dynamic";

// Navigation components
// export const Navigation = dynamic(
//   () => import("@/components/sections/Navigation/Navigation"),
//   {
//     ssr: true,
//     loading: () => <div className="h-20" />, // Placeholder height
//   }
// );

// // Footer component
// export const Footer = dynamic(() => import("@/components/sections/Footer"), {
//   ssr: true,
//   loading: () => <div className="h-96 bg-gray-100" />, // Placeholder height
// });

// // Hero component
// export const Hero = dynamic(() => import("@/components/sections/Hero"), {
//   ssr: true,
//   loading: () => <div className="h-screen bg-gray-100" />, // Full screen placeholder
// });

// Other heavy components can be added here
export const Carousel = dynamic(
  () => import("@/components/ui/embla-carousel-wrapper"),
  {
    ssr: false, // Client-side only
  }
);

// Optimize third-party components
export const CountUp = dynamic(() => import("react-countup"), { ssr: false });
export const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);
