"use client";

import { useState } from "react";
import Link from "next/link";
import { useScroll } from "@/hooks/useScroll";
import { TopBar } from "./TopBar";
import { MainMenu } from "./MainMenu";
import MobileNavigation from "./MobileNavigation";
import { IcRoundMenu } from "@/public/icons/menu-icon";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScroll();

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-900/95 shadow-lg py-4"
            : "bg-neutral-900 py-0"
        }`}
      >
        {!isScrolled && <TopBar />}

        {/* Main Navigation */}
        <div className={`container mx-auto px-4 ${isScrolled ? "" : "py-4"}`}>
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <span
                className={`font-bold text-2xl transition-all duration-300 ${
                  isScrolled ? "text-[#DC2626]" : "text-[#DC2626]"
                }`}
              >
                TEKSTİL DEMO
              </span>
            </Link>

            <MainMenu />

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden ${
                isScrolled ? "text-neutral-100" : "text-neutral-100"
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <IcRoundMenu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navigation;
