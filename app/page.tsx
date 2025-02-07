import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features/Features";
import Subsidiaries from "@/components/sections/Subsidiaries";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Quality from "@/components/sections/Quality";
import Highlight from "@/components/sections/Highlight";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden">
      <Hero />
      <Features />
      <Subsidiaries />
      <WhoWeAre />
      <Quality />
      <Highlight />
      <Testimonials />
    </div>
  );
}
