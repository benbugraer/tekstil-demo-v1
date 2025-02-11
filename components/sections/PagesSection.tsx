"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PagesSectionProps {
  title: string;
  description: string;
  imagePath: string;
  className?: string;
  imageClassName?: string;
  gradientClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
  height?: string;
}

export default function PagesSection({
  title,
  description,
  imagePath,
  className = "",
  imageClassName = "object-cover",
  gradientClassName = "bg-gradient-to-b from-black/70 via-neutral-900/60 to-neutral-50",
  titleClassName = "text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-8 tracking-tight leading-tight",
  descriptionClassName = "text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2",
  containerClassName = "flex flex-col justify-center items-center h-full text-center px-4",
  height = "h-[500px] md:h-[750px]",
}: PagesSectionProps) {
  return (
    <div className={`relative ${height} mb-8 md:mb-16 ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt={title}
          fill
          className={imageClassName}
          priority
        />
        <div className={`absolute inset-0 ${gradientClassName}`} />
      </div>
      <div className="relative h-full container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={containerClassName}
        >
          <h1 className={titleClassName}>{title}</h1>
          <p className={descriptionClassName}>{description}</p>
        </motion.div>
      </div>
    </div>
  );
}
