import React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface EmblaCarouselWrapperProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
}

const EmblaCarouselWrapper: React.FC<EmblaCarouselWrapperProps> = ({
  children,
  options,
}) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};

export default EmblaCarouselWrapper;
