import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features/Features";
import Subsidiaries from "@/components/sections/Subsidiaries";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Quality from "@/components/sections/Quality";
import Highlight from "@/components/sections/Highlight";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Subsidiaries />
      <WhoWeAre />
      <Quality />
      <Highlight />
      <Testimonials />
      <Footer />
    </div>
  );
}
