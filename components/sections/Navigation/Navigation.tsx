"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useScroll } from "@/hooks/useScroll";
import { TopBar } from "./TopBar";
import { MainMenu } from "./MainMenu";
import MobileNavigation from "./MobileNavigation";
import { IcRoundMenu } from "@/public/icons/menu-icon";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScroll();

  const headerVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    scrolled: {
      backgroundColor: "rgba(23, 23, 23, 0.95)",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const menuButtonVariants = {
    initial: { opacity: 0, x: 20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    tap: { scale: 0.95 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.header
        className="w-full z-50 bg-neutral-900"
        variants={headerVariants}
        initial="initial"
        animate={isScrolled ? ["animate", "scrolled"] : "animate"}
      >
        <AnimatePresence mode="wait">
          {!isScrolled && <TopBar />}
        </AnimatePresence>

        <motion.div
          className="container mx-auto px-4"
          animate={{
            paddingTop: isScrolled ? "1rem" : "1.5rem",
            paddingBottom: isScrolled ? "1rem" : "1.5rem",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center">
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <Link href="/" className="flex items-center gap-2">
                <motion.span
                  className="font-bold text-2xl text-[#DC2626]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  TEKSTİL DEMO
                </motion.span>
              </Link>
            </motion.div>

            <MainMenu />

            <motion.button
              className="lg:hidden text-neutral-100"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              variants={menuButtonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              <IcRoundMenu className="w-8 h-8" />
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNavigation
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
