"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Mail, Clock, Phone } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import { Separator } from "@/components/ui/separator";
import Facebook from "@/public/social/facebook-icon";
import Instagram from "@/public/social/instagram-icon";
import LinkedIn from "@/public/social/linkedin-icon";
import XformerlyTwitter from "@/public/social/x-icon";
import LanguageChanger from "../Hero/LanguageChanger";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const kurumsal = [
    {
      title: "Yönetim",
      href: "/kurumsal/yonetim",
      description:
        "Şirketimizin yönetim kadrosu ve organizasyon yapısı hakkında bilgi alın.",
    },
    {
      title: "Kilometre Taşlarımız",
      href: "/kurumsal/kilometre-taslarimiz",
      description: "1970'den bugüne tekstil sektöründeki başarı hikayemiz.",
    },
  ];

  const hizmetler = [
    {
      title: "Moda & Tasarım",
      href: "/hizmetlerimiz/moda-tasarim",
      description: "En son trendlere uygun, yenilikçi tekstil tasarımları.",
    },
    {
      title: "Üretim",
      href: "/hizmetlerimiz/uretim",
      description: "Modern teknoloji ile yüksek kaliteli üretim süreçlerimiz.",
    },
    {
      title: "Sevkiyat",
      href: "/hizmetlerimiz/sevkiyat",
      description: "Dünya çapında güvenilir ve hızlı lojistik hizmetlerimiz.",
    },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-900/95 shadow-lg py-4"
            : "bg-neutral-900 py-0"
        }`}
      >
        {!isScrolled && (
          <div className="hidden md:block bg-neutral-100/90 text-white py-2.5 rounded-b-md">
            <div className="container mx-auto flex justify-between items-center text-sm px-4">
              <div className="flex items-center space-x-6 text-neutral-100 bg-neutral-900/90 rounded-md px-4 py-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={18} />
                  <span>info@example.com</span>
                </div>
                <Separator
                  orientation="vertical"
                  className="h-4 w-[1px] bg-neutral-400"
                />
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={18} />
                  <span>Pazartesi-Cuma 09:00 - 18:00</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 bg-neutral-900/90 text-neutral-100 rounded-md px-4 py-2 hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer ease-linear duration-300 text-sm">
                  <Phone size={18} />

                  <span>+90 533 533 53 53</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://www.facebook.com/?locale=tr_TR"
                    target="_blank"
                    className="bg-neutral-900/90 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                  >
                    <Facebook className="w-4 h-4 text-neutral-100 cursor-pointer transition-colors group-hover:text-neutral-100" />
                  </a>

                  <a
                    href="https://www.facebook.com/?locale=tr_TR"
                    target="_blank"
                    className="bg-neutral-900/90 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                  >
                    <Instagram className="w-4 h-4 text-neutral-100 cursor-pointer transition-colors group-hover:text-neutral-100" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="bg-neutral-900/90 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                  >
                    <LinkedIn className="w-4 h-4 text-neutral-100 cursor-pointer transition-colors group-hover:text-neutral-100" />
                  </a>

                  <a
                    href="https://www.x.com/"
                    target="_blank"
                    className="bg-neutral-900/90 rounded-md p-1.5 hover:bg-[#DC2626] transition-colors ease-linear duration-300 group"
                  >
                    <XformerlyTwitter className="w-4 h-4 text-neutral-100 cursor-pointer transition-colors group-hover:text-neutral-100" />
                  </a>
                </div>
                <LanguageChanger />
              </div>
            </div>
          </div>
        )}

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

            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`px-4 py-2 transition-colors duration-200 text-lg ${
                        pathname === "/"
                          ? "text-[#DC2626]"
                          : "text-white hover:text-[#DC2626]"
                      }`}
                    >
                      Anasayfa
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`transition-colors duration-200 text-lg font-normal ${
                      pathname.includes("/kurumsal")
                        ? "text-[#DC2626]"
                        : "text-white hover:text-[#DC2626]"
                    } data-[state=open]:text-[#DC2626]`}
                  >
                    Kurumsal
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {kurumsal.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={`block space-y-1 rounded-md p-3 leading-none no-underline hover:bg-slate-50 transition-colors ${
                                pathname === item.href
                                  ? "text-[#DC2626] bg-red-50"
                                  : "text-[#2A3855]"
                              }`}
                            >
                              <div className="text-lg font-medium">
                                {item.title}
                              </div>
                              <p className="text-base text-slate-600 line-clamp-2">
                                {item.description}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`transition-colors duration-200 text-lg font-normal ${
                      pathname.includes("/hizmetlerimiz")
                        ? "text-[#DC2626]"
                        : "text-white hover:text-[#DC2626]"
                    } data-[state=open]:text-[#DC2626]`}
                  >
                    Hizmetlerimiz
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {hizmetler.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={`block space-y-1 rounded-md p-3 leading-none no-underline hover:bg-slate-50 transition-colors ${
                                pathname === item.href
                                  ? "text-[#DC2626] bg-red-50"
                                  : "text-[#2A3855]"
                              }`}
                            >
                              <div className="text-lg font-medium">
                                {item.title}
                              </div>
                              <p className="text-base text-slate-600 line-clamp-2">
                                {item.description}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/surdurulebilirlik" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`px-4 py-2 transition-colors duration-200 text-lg ${
                        pathname === "/surdurulebilirlik"
                          ? "text-[#DC2626]"
                          : "text-white hover:text-[#DC2626]"
                      }`}
                    >
                      Sürdürülebilirlik
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/iletisim" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`px-4 py-2 transition-colors duration-200 text-lg ${
                        pathname === "/iletisim"
                          ? "text-[#DC2626]"
                          : "text-white hover:text-[#DC2626]"
                      }`}
                    >
                      İletişim
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden ${
                isScrolled ? "text-white" : "text-[#2A3855]"
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
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
