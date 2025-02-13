"use client";

import dynamic from "next/dynamic";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { PagesSection } from "@/components/sections/PagesSection";

// Dynamic import for the map component to avoid SSR issues
const Map = dynamic(() => import("./Map"), {
  loading: () => (
    <div className="flex items-center justify-center h-[500px] bg-gray-50">
      <div className="animate-pulse text-gray-500">Harita yükleniyor...</div>
    </div>
  ),
  ssr: false,
});

const companyInfo = {
  address: "Organize Sanayi Bölgesi 1. Cadde No: 123, İstanbul",
  phone: "+90 (212) 456 78 90",
  email: "info@tekstilfabrikasi.com",
  workingHours: "Pazartesi - Cumartesi: 09:00 - 18:00",
  location: {
    lat: 41.0082,
    lng: 28.9784,
  },
};

export default function ContactContent() {
  return (
    <>
      <PagesSection
        title="İletişim"
        description="Bizimle iletişime geçin"
        backgroundImage="/factory/factory-1.jpg"
        breadcrumbs={[
          {
            label: "İletişim",
            href: "/iletisim",
          },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* İletişim Bilgileri */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">
              Firma Bilgileri
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Adres
                  </h3>
                  <p className="text-gray-600 mt-1">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg shrink-0">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Telefon
                  </h3>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200 mt-1 block"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg shrink-0">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    E-posta
                  </h3>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200 mt-1 block"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg shrink-0">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Çalışma Saatleri
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {companyInfo.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Harita */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[500px]">
            <Map companyInfo={companyInfo} />
          </div>
        </div>
      </div>
    </>
  );
}
