import { Mail, Clock, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/config/navigation";
import Facebook from "@/public/social/facebook-icon";
import Instagram from "@/public/social/instagram-icon";
import LinkedIn from "@/public/social/linkedin-icon";
import XformerlyTwitter from "@/public/social/x-icon";
import LanguageChanger from "./LanguageChanger";

const SocialIcon = ({ icon }: { icon: string }) => {
  const icons = {
    Facebook,
    Instagram,
    LinkedIn,
    XformerlyTwitter,
  };
  const Icon = icons[icon as keyof typeof icons];
  return (
    <Icon className="w-4 h-4 text-neutral-100 cursor-pointer transition-colors group-hover:text-neutral-100" />
  );
};

export const TopBar = () => {
  return (
    <div className="hidden md:block bg-neutral-100/90 text-white py-2.5 rounded-b-md">
      <div className="container mx-auto flex justify-between items-center text-sm px-4">
        <div className="flex items-center space-x-6 text-neutral-100 bg-neutral-900/90 rounded-md px-4 py-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail size={18} />
            <span>{CONTACT_INFO.email}</span>
          </div>
          <Separator
            orientation="vertical"
            className="h-4 w-[1px] bg-neutral-400"
          />
          <div className="flex items-center gap-2 text-sm">
            <Clock size={18} />
            <span>{CONTACT_INFO.workingHours}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-neutral-900/90 text-neutral-100 rounded-md px-4 py-2 hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer ease-linear duration-300 text-sm">
            <Phone size={18} />
            <span>{CONTACT_INFO.phone}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                className="bg-neutral-900/90 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                aria-label={link.label}
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
          <LanguageChanger />
        </div>
      </div>
    </div>
  );
};
