import { motion } from "framer-motion";
import { TimelineItemProps } from "../types/types";

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const TimelineItem = ({
  title,
  content,
  animationDelay = 0,
}: TimelineItemProps) => {
  return (
    <motion.div
      {...ANIMATION_CONFIG}
      transition={{ ...ANIMATION_CONFIG.transition, delay: animationDelay }}
      className="bg-[#DC2626] backdrop-blur-sm rounded-md border border-ne p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white dark:text-neutral-300">{content}</p>
    </motion.div>
  );
};
