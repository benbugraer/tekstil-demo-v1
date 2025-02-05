import { useState, useEffect } from "react";

interface UseScrollOptions {
  threshold?: number;
}

export const useScroll = ({ threshold = 100 }: UseScrollOptions = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};
