import { Mail, Clock, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/config/navigation";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import LanguageChanger from "./LanguageChanger";
import { motion } from "framer-motion";

type IconComponents = {
  SlSocialFacebook: typeof SlSocialFacebook;
  FaInstagram: typeof FaInstagram;
  SlSocialLinkedin: typeof SlSocialLinkedin;
  FaXTwitter: typeof FaXTwitter;
};

const icons: IconComponents = {
  SlSocialFacebook,
  FaInstagram,
  SlSocialLinkedin,
  FaXTwitter,
};

const SocialIcon = ({ icon }: { icon: keyof IconComponents }) => {
  const Icon = icons[icon];
  return (
    <Icon className="w-4 h-4 text-neutral-100 cursor-pointer transition-colors group-hover:text-neutral-100" />
  );
};

export const TopBar = () => {
  const containerVariants = {
    initial: {
      height: 0,
      opacity: 0,
      y: -20,
    },
    animate: {
      height: "auto",
      opacity: 1,
      y: 0,
      transition: {
        height: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
        opacity: { delay: 0.6, duration: 0.4 },
        y: { delay: 0.6, duration: 0.4, ease: [0.33, 1, 0.68, 1] },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      y: -20,
      transition: {
        height: { duration: 0.2, ease: [0.33, 1, 0.68, 1] },
        opacity: { duration: 0.2 },
        y: { duration: 0.2, ease: [0.33, 1, 0.68, 1] },
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const socialVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="hidden md:block bg-neutral-100/90 text-white overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="container mx-auto flex justify-between items-center text-sm px-4 py-2.5"
        variants={contentVariants}
      >
        <motion.div
          className="flex items-center space-x-6 text-neutral-100 bg-neutral-900/90 rounded-md px-4 py-2"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center gap-2 text-sm"
            variants={itemVariants}
          >
            <Mail size={18} />
            <span>{CONTACT_INFO.email}</span>
          </motion.div>
          <Separator
            orientation="vertical"
            className="h-4 w-[1px] bg-neutral-400"
          />
          <motion.div
            className="flex items-center gap-2 text-sm"
            variants={itemVariants}
          >
            <Clock size={18} />
            <span>{CONTACT_INFO.workingHours}</span>
          </motion.div>
        </motion.div>

        <motion.div className="flex items-center gap-6" variants={itemVariants}>
          <motion.div
            className="flex items-center gap-2 bg-neutral-900/90 text-neutral-100 rounded-md px-4 py-2 hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer ease-linear duration-300 text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone size={18} />
            <span>{CONTACT_INFO.phone}</span>
          </motion.div>

          <div className="flex items-center gap-1.5">
            {SOCIAL_LINKS.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                className="bg-neutral-900/90 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                aria-label={`${link.label} sayfamızı ziyaret edin`}
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                <SocialIcon icon={link.icon as keyof IconComponents} />
              </motion.a>
            ))}
          </div>
          <LanguageChanger />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
