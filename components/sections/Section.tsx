import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className,
}: SectionProps) {
  const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section id={id || sectionId}>
      <div className={className}>
        <motion.div
          className="relative container mx-auto px-4 py-16 max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center space-y-4 pb-6 mx-auto">
            {title && (
              <motion.h2
                variants={itemVariants}
                className="text-xs text-neutral-100 font-medium tracking-wider uppercase inline-block bg-[#DC2626] px-4 py-2 rounded-full"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.h3
                variants={itemVariants}
                className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl text-neutral-900 uppercase"
              >
                {subtitle}
              </motion.h3>
            )}
            {description && (
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
              >
                {description}
              </motion.p>
            )}
          </div>
          <motion.div variants={itemVariants}>{children}</motion.div>
        </motion.div>
      </div>
    </section>
  );
}
