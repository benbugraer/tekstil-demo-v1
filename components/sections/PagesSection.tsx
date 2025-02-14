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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
        "relative w-full h-[45vh] md:h-[50vh] lg:h-[60vh] flex flex-col",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.75) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full h-full"
      >
        {/* Breadcrumbs */}
        <motion.div
          variants={itemVariants}
          className="w-full container mx-auto px-4 pt-8"
        >
          <Breadcrumb className="inline-flex bg-[#DC2626]/90 px-3 py-1.5 rounded-md backdrop-blur-sm">
            <BreadcrumbList className="flex items-center text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Ana Sayfa
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60 mx-2" />
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
                          className="text-white hover:text-white/80 transition-colors"
                        >
                          {crumb.label}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="text-white/60 mx-2" />
                    </>
                  )}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        {/* Title and Description */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-white/90"
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
