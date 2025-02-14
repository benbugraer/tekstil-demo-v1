"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PagesSectionProps {
  title: string;
  description?: string;
  backgroundImage: string;
  breadcrumbs: Array<{
    label: string;
    href?: string;
  }>;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function PagesSection({
  title,
  description,
  backgroundImage,
  breadcrumbs,
  className,
}: PagesSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[40vh] lg:min-h-[60vh] flex items-center",
        className
      )}
    >
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full"
      >
        <div className="container mx-auto px-4 md:px-6 py-20 lg:py-32">
          {/* Breadcrumb Navigation with Enhanced Visibility */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <Breadcrumb className="bg-[#DC2626]/70 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="text-white/90 hover:text-neutral-900 transition-colors font-medium ease-in-out duration-300"
                  >
                    Ana Sayfa
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center">
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage className="text-white font-medium">
                        {crumb.label}
                      </BreadcrumbPage>
                    ) : (
                      <>
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            href={crumb.href || "#"}
                            className="text-white/90 hover:text-white transition-colors"
                          >
                            {crumb.label}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/60" />
                      </>
                    )}
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          {/* Title and Description with Enhanced Typography */}
          <div className="max-w-5xl">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl"
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
