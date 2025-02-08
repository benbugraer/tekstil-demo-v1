"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
  {
    id: 10,
    name: "Kurumsal Yönetim Komitesi",
    title: "Kurumsal Yönetim İlkeleri Uyum",
    image: "/members/committee-2.jpg",
    bio: "Şirketin kurumsal yönetim ilkelerine uyumunun izlenmesi, iyileştirme önerilerinin geliştirilmesi.",
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
      className="cursor-pointer"
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl">
        <CardContent className="p-0">
          <div className="relative h-[300px] w-full group">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{member.title}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const renderMemberGrid = (members: Member[]) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
    >
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </motion.div>
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px] mb-16">
        <div className="absolute inset-0">
          <Image
            src="/factory/factory-3.jpg"
            alt="Fabrika"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#dc2626]" />
        </div>
        <div className="relative h-full container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center items-center h-full text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-[#dc2626] mb-6">
              Yönetim Kadromuz
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Şirketimizin başarısının arkasındaki deneyimli ve vizyoner
              ekibimiz ile sürdürülebilir büyüme ve inovasyonu hedefliyoruz
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="yonetim-kurulu" className="w-full">
          <TabsList className="w-full flex justify-center gap-2 mb-8 bg-transparent p-1">
            <TabsTrigger
              value="yonetim-kurulu"
              className="text-lg px-8 py-3 data-[state=active]:bg-[#DC2626] data-[state=active]:text-white rounded-md transition-all duration-300 hover:bg-neutral-100"
            >
              Yönetim Kurulu
            </TabsTrigger>
            <TabsTrigger
              value="yurutme-kurulu"
              className="text-lg px-8 py-3 data-[state=active]:bg-[#DC2626] data-[state=active]:text-white rounded-md transition-all duration-300 hover:bg-neutral-100"
            >
              Yürütme Kurulu
            </TabsTrigger>
            <TabsTrigger
              value="komiteler"
              className="text-lg px-8 py-3 data-[state=active]:bg-[#DC2626] data-[state=active]:text-white rounded-md transition-all duration-300 hover:bg-neutral-100"
            >
              Komiteler
            </TabsTrigger>
          </TabsList>

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
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {selectedMember?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                {selectedMember && (
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {selectedMember?.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
