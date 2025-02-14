// import { ImageProps } from "next/image";
// import { getCdnUrl } from "./cdn-utils";

// type ImageCategory =
//   | "brands"
//   | "factory"
//   | "jungle"
//   | "sewing"
//   | "textile"
//   | "worker"
//   | "members"
//   | "threads"
//   | "logo"
//   | "flags"
//   | "social"
//   | "icons";

// interface OptimizedImageProps extends Partial<ImageProps> {
//   quality?: number;
//   priority?: boolean;
// }

// const getImagePath = (category: ImageCategory, filename: string) => {
//   return `/${category}/${filename}`;
// };

// export const getOptimizedImageProps = (
//   category: ImageCategory,
//   filename: string,
//   alt: string,
//   options: OptimizedImageProps = {}
// ): Partial<ImageProps> => {
//   const { quality = 75, priority = false, ...rest } = options;

//   const path = getImagePath(category, filename);
//   const cdnPath = getCdnUrl(path);

//   return {
//     src: cdnPath,
//     alt,
//     quality,
//     priority,
//     loading: priority ? "eager" : "lazy",
//     sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
//     placeholder: "blur",
//     blurDataURL:
//       "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
//     ...rest,
//   };
// };

// // Özel resim kategorileri için yardımcı fonksiyonlar
// export const getBrandImage = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("brands", filename, alt, options);

// export const getFactoryImage = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("factory", filename, alt, options);

// export const getJungleImage = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("jungle", filename, alt, options);

// export const getSewingImage = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("sewing", filename, alt, options);

// export const getTextileImage = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("textile", filename, alt, options);

// export const getWorkerImage = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("worker", filename, alt, options);

// export const getMemberImage = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("members", filename, alt, options);

// export const getThreadImage = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("threads", filename, alt, options);

// export const getLogo = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("logo", filename, alt, options);

// export const getFlag = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("flags", filename, alt, options);

// export const getSocialIcon = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("social", filename, alt, options);

// export const getIcon = (
//   filename: string,
//   alt: string,
//   options?: OptimizedImageProps
// ) => getOptimizedImageProps("icons", filename, alt, options);
