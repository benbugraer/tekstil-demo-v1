// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";
// import { hasClientConsent, setClientConsent } from "@/lib/client/cookie-utils";

// export default function CookieConsent() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Cookie izni kontrolü
//     const consent = hasClientConsent();
//     if (!consent) {
//       setIsVisible(true);
//     }
//   }, []);

//   const handleAccept = () => {
//     setClientConsent(true);
//     setIsVisible(false);
//   };

//   const handleDecline = () => {
//     setClientConsent(false);
//     setIsVisible(false);
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed bottom-4 right-4 z-[100] max-w-[400px] rounded-lg border border-border bg-background p-4 shadow-lg shadow-black/5">
//       <div className="flex gap-2">
//         <div className="flex grow flex-col gap-3">
//           <div className="space-y-1">
//             <p className="text-sm font-medium">
//               Gizliliğinize Önem Veriyoruz 🍪
//             </p>
//             <p className="text-sm text-muted-foreground">
//               Deneyiminizi iyileştirmek ve size özel içerik göstermek için
//               çerezleri kullanıyoruz.
//             </p>
//           </div>
//           <div className="flex gap-2">
//             <Button
//               size="sm"
//               onClick={handleAccept}
//               className="bg-[#dc2626] text-white hover:bg-[#dc2626]/90 border-none"
//             >
//               Kabul Et
//             </Button>
//             <Button size="sm" variant="outline" onClick={handleDecline}>
//               Reddet
//             </Button>
//           </div>
//         </div>
//         <Button
//           variant="ghost"
//           className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
//           aria-label="Bildirimi kapat"
//           onClick={() => setIsVisible(false)}
//         >
//           <X
//             size={16}
//             strokeWidth={2}
//             className="opacity-60 transition-opacity group-hover:opacity-100"
//             aria-hidden="true"
//           />
//         </Button>
//       </div>
//     </div>
//   );
// }
