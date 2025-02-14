// // Cache süreleri (saniye cinsinden)
// export const CACHE_TIMES = {
//   STATIC: 31536000, // 1 yıl
//   LONG: 2592000, // 30 gün
//   MEDIUM: 86400, // 1 gün
//   SHORT: 3600, // 1 saat
//   NONE: 0, // Cache yok
// } as const;

// // Sayfa bazlı cache stratejileri
// export const PAGE_CACHE_CONFIG = {
//   // Statik sayfalar
//   static: {
//     revalidate: CACHE_TIMES.STATIC,
//     headers: {
//       "Cache-Control": `public, max-age=${CACHE_TIMES.STATIC}, s-maxage=${CACHE_TIMES.STATIC}, stale-while-revalidate=${CACHE_TIMES.SHORT}`,
//     },
//   },
//   // Sık güncellenmeyen sayfalar
//   dynamic: {
//     revalidate: CACHE_TIMES.LONG,
//     headers: {
//       "Cache-Control": `public, max-age=${CACHE_TIMES.MEDIUM}, s-maxage=${CACHE_TIMES.LONG}, stale-while-revalidate=${CACHE_TIMES.SHORT}`,
//     },
//   },
//   // Sık güncellenen sayfalar
//   frequent: {
//     revalidate: CACHE_TIMES.MEDIUM,
//     headers: {
//       "Cache-Control": `public, max-age=${CACHE_TIMES.SHORT}, s-maxage=${CACHE_TIMES.MEDIUM}, stale-while-revalidate=${CACHE_TIMES.SHORT}`,
//     },
//   },
//   // Cache olmayan sayfalar
//   noCache: {
//     revalidate: 0,
//     headers: {
//       "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
//       Pragma: "no-cache",
//       Expires: "0",
//     },
//   },
// } as const;

// // Asset türüne göre cache stratejileri
// export const ASSET_CACHE_CONFIG = {
//   // Resimler
//   images: {
//     "Cache-Control": `public, max-age=${CACHE_TIMES.STATIC}, immutable`,
//   },
//   // Fontlar
//   fonts: {
//     "Cache-Control": `public, max-age=${CACHE_TIMES.STATIC}, immutable`,
//   },
//   // Statik dosyalar (CSS, JS)
//   static: {
//     "Cache-Control": `public, max-age=${CACHE_TIMES.LONG}, immutable`,
//   },
//   // API yanıtları
//   api: {
//     "Cache-Control": `public, max-age=${CACHE_TIMES.SHORT}, s-maxage=${CACHE_TIMES.MEDIUM}, stale-while-revalidate=${CACHE_TIMES.SHORT}`,
//   },
// } as const;

// // Cache anahtar oluşturucu
// export const createCacheKey = (prefix: string, ...parts: string[]): string => {
//   return [prefix, ...parts].join(":");
// };

// // Cache kontrol başlıkları oluşturucu
// export const createCacheHeaders = (
//   config: (typeof ASSET_CACHE_CONFIG)[keyof typeof ASSET_CACHE_CONFIG]
// ) => {
//   return new Headers(config);
// };
