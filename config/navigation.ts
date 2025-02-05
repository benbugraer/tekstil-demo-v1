export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

export const CONTACT_INFO = {
  email: "info@example.com",
  phone: "+90 533 533 53 53",
  workingHours: "Pazartesi-Cuma 09:00 - 18:00",
};

export const KURUMSAL_ITEMS: NavItem[] = [
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

export const HIZMETLER_ITEMS: NavItem[] = [
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

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.facebook.com/?locale=tr_TR",
    icon: "Facebook",
    label: "Facebook",
  },
  {
    href: "https://www.facebook.com/?locale=tr_TR",
    icon: "Instagram",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/",
    icon: "LinkedIn",
    label: "LinkedIn",
  },
  {
    href: "https://www.x.com/",
    icon: "XformerlyTwitter",
    label: "X (Twitter)",
  },
];
