import React from "react";
import Link from "next/link";
import { POLICY_ITEMS, SOCIAL_LINKS, CONTACT_INFO } from "@/config/navigation";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">E-posta:</span>{" "}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-red-500 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                <span className="font-medium">Telefon:</span>{" "}
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="hover:text-red-500 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <span className="font-medium">Çalışma Saatleri:</span>{" "}
                {CONTACT_INFO.workingHours}
              </p>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Politikalar */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2">
              {POLICY_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-red-500 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>
            © {new Date().getFullYear()} Tekstil Fabrikası. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
