import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const pathname = usePathname();

  const kurumsal = [
    { title: "Yönetim", href: "/kurumsal/yonetim" },
    { title: "Kilometre Taşlarımız", href: "/kurumsal/kilometre-taslarimiz" },
  ];

  const hizmetler = [
    { title: "Moda & Tasarım", href: "/hizmetlerimiz/moda-tasarim" },
    { title: "Üretim", href: "/hizmetlerimiz/uretim" },
    { title: "Sevkiyat", href: "/hizmetlerimiz/sevkiyat" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-xl font-bold text-[#2A3855]">
            Menu
          </SheetTitle>
        </SheetHeader>

        <div className="p-4">
          <nav className="space-y-2">
            <Link
              href="/"
              className={`block py-2 ${
                pathname === "/" ? "text-[#DC2626]" : "text-[#2A3855]"
              }`}
              onClick={onClose}
            >
              Anasayfa
            </Link>

            <Accordion type="single" collapsible>
              <AccordionItem value="kurumsal">
                <AccordionTrigger className="text-[#2A3855]">
                  Kurumsal
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-4 space-y-2">
                    {kurumsal.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block py-2 ${
                          pathname === item.href
                            ? "text-[#DC2626]"
                            : "text-[#2A3855]"
                        }`}
                        onClick={onClose}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hizmetler">
                <AccordionTrigger className="text-[#2A3855]">
                  Hizmetlerimiz
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-4 space-y-2">
                    {hizmetler.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block py-2 ${
                          pathname === item.href
                            ? "text-[#DC2626]"
                            : "text-[#2A3855]"
                        }`}
                        onClick={onClose}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              href="/surdurulebilirlik"
              className={`block py-2 border-b border-gray-200 ${
                pathname === "/surdurulebilirlik"
                  ? "text-[#DC2626]"
                  : "text-[#2A3855]"
              }`}
              onClick={onClose}
            >
              Sürdürülebilirlik
            </Link>
            <Link
              href="/iletisim"
              className={`block py-2 ${
                pathname === "/iletisim" ? "text-[#DC2626]" : "text-[#2A3855]"
              }`}
              onClick={onClose}
            >
              İletişim
            </Link>
          </nav>

          <div className="border-t pt-4">
            <h3 className="text-[#2A3855] font-medium mb-3">Sosyal Medya</h3>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="bg-neutral-100 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                aria-label="Facebook sayfamızı ziyaret edin"
              >
                <SlSocialFacebook className="w-4 h-4 text-neutral-800 cursor-pointer transition-colors group-hover:text-neutral-100" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="bg-neutral-100 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                aria-label="Instagram sayfamızı ziyaret edin"
              >
                <FaInstagram className="w-4 h-4 text-neutral-800 cursor-pointer transition-colors group-hover:text-neutral-100" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="bg-neutral-100 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                aria-label="LinkedIn sayfamızı ziyaret edin"
              >
                <SlSocialLinkedin className="w-4 h-4 text-neutral-800 cursor-pointer transition-colors group-hover:text-neutral-100" />
              </a>

              <a
                href="https://www.x.com/"
                target="_blank"
                className="bg-neutral-100 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                aria-label="X (Twitter) sayfamızı ziyaret edin"
              >
                <FaXTwitter className="w-4 h-4 text-neutral-800 cursor-pointer transition-colors group-hover:text-neutral-100" />
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
