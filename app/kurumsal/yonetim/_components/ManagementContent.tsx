"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import PagesSection from "@/components/sections/PagesSection";

interface Member {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
}

const boardMembers: Member[] = [
  {
    id: 1,
    name: "Burak Turgut Orhun",
    title: "Yönetim ve Yürütme Kurulu Başkanı",
    image: "/members/member-1.jpg",
    bio: "Uzun yıllar kurumsal şirketlerde üst düzey yöneticilik yapmış, grubun birleşme ve satın almalar ve yeni yatırım projelerinde liderlik yapmıştır. Ayrıca bu dönemde, grubun hem yurt içi hem de yurtdışı kimya ve enerji şirketlerinde yönetici, yönetim kurulu üyesi ve yönetim kurulu başkanı görevlerinde bulunmuştur.",
  },
  {
    id: 2,
    name: "Ali Çalışkan",
    title: "Yönetim Kurulu Başkan Vekili",
    image: "/members/member-3.jpg",
    bio: "20 yılı aşkın sektör deneyimi ile şirketin stratejik büyüme ve gelişiminde önemli rol oynamıştır.",
  },
  {
    id: 3,
    name: "Yeşim Özlale Önen",
    title: "Yönetim Kurulu Üyesi",
    image: "/members/member-2.jpg",
    bio: "Finans ve risk yönetimi alanındaki uzmanlığı ile şirketin finansal stratejilerinin belirlenmesinde etkin rol almaktadır.",
  },
  {
    id: 4,
    name: "N. Orhun Köstem",
    title: "Yönetim Kurulu Üyesi",
    image: "/members/member-4.jpg",
    bio: "Uluslararası iş geliştirme ve stratejik planlama konularında geniş deneyime sahiptir.",
  },
];

const executiveMembers: Member[] = [
  {
    id: 5,
    name: "Doğan Sevim",
    title: "Yönetim ve Yürütme Kurulu Başkanı",
    image: "/members/member-5.jpg",
    bio: "Şirketin genel stratejisini belirlemek ve uygulanmasını sağlamaktan sorumludur.",
  },
  {
    id: 6,
    name: "Ömür Menteş",
    title: "Global Operasyonlar Genel Müdür Yardımcısı, Lastik",
    image: "/members/member-6.jpg",
    bio: "Global operasyonların yönetimi ve optimizasyonundan sorumludur.",
  },
  {
    id: 7,
    name: "Ayşe Yılmaz",
    title: "Genel Müdür Yardımcısı, Global Satış ve Pazarlama",
    image: "/members/member-7.jpg",
    bio: "Global satış stratejilerinin geliştirilmesi ve uygulanmasından sorumludur.",
  },
  {
    id: 8,
    name: "Şermin Mutlu",
    title: "Genel Müdür Yardımcısı, Finans",
    image: "/members/member-8.jpg",
    bio: "Şirketin finansal operasyonlarının yönetimi ve stratejik finansal planlamasından sorumludur.",
  },
];

const committeeMembers: Member[] = [
  {
    id: 9,
    name: "Denetim Komitesi",
    title: "Finansal Raporlama ve İç Kontrol",
    image: "/members/committee-1.jpg",
    bio: "Şirketin finansal raporlama sürecinin gözetimi, iç kontrol ve iç denetim sistemlerinin etkinliğinin değerlendirilmesi.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function ManagementContent() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("yurutme-kurulu");

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  const MemberCard = ({ member }: { member: Member }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => handleMemberClick(member)}
      className="cursor-pointer h-full"
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl h-full flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-4 md:p-6 bg-white flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">{member.title}</p>
            </div>
            <div className="mt-3 md:mt-4">
              <button className="text-[#DC2626] text-xs md:text-sm font-medium hover:text-[#DC2626]/80 transition-colors">
                Detayları Görüntüle →
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const renderMemberGrid = (members: Member[]) => (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-4 md:mt-8"
      >
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="bg-neutral-50">
      <PagesSection
        title="Yönetim Kadromuz"
        description="Şirketimizin başarısının arkasındaki deneyimli ve vizyoner ekibimiz ile sürdürülebilir büyüme ve inovasyonu hedefliyoruz"
        imagePath="/factory/factory-3.jpg"
      />

      <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-24">
        <Tabs
          defaultValue="yurutme-kurulu"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8 md:mb-12">
            <TabsList className="inline-flex bg-neutral-100 p-1 rounded-lg">
              <TabsTrigger
                value="yonetim-kurulu"
                className="px-3 py-2 text-sm rounded-md data-[state=active]:bg-[#DC2626] data-[state=active]:text-white transition-all duration-300"
              >
                Yönetim Kurulu
              </TabsTrigger>
              <TabsTrigger
                value="yurutme-kurulu"
                className="px-3 py-2 text-sm rounded-md data-[state=active]:bg-[#DC2626] data-[state=active]:text-white transition-all duration-300"
              >
                Yürütme Kurulu
              </TabsTrigger>
              <TabsTrigger
                value="komiteler"
                className="px-3 py-2 text-sm rounded-md data-[state=active]:bg-[#DC2626] data-[state=active]:text-white transition-all duration-300"
              >
                Komiteler
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="yonetim-kurulu">
            {renderMemberGrid(boardMembers)}
          </TabsContent>

          <TabsContent value="yurutme-kurulu">
            {renderMemberGrid(executiveMembers)}
          </TabsContent>

          <TabsContent value="komiteler">
            {renderMemberGrid(committeeMembers)}
          </TabsContent>
        </Tabs>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-[95vw] md:max-w-4xl mx-4 p-4 md:p-6">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900">
                {selectedMember?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                {selectedMember && (
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {selectedMember?.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {selectedMember?.bio}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
