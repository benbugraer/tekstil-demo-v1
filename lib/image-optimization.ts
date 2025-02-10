import { ImageProps } from "next/image";

export const getImageProps = (
  src: string,
  alt: string,
  priority = false
): Partial<ImageProps> => ({
  src,
  alt,
  priority,
  quality: 75,
  loading: priority ? "eager" : "lazy",
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  placeholder: "blur",
  blurDataURL:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
});

export const optimizeImage = (url: string): string => {
  // Add WebP support
  if (url.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return url.replace(/\.(jpg|jpeg|png|gif)$/i, ".webp");
  }
  return url;
};

// Commonly used image sizes for responsive design
export const imageSizes = {
  thumbnail: 150,
  small: 300,
  medium: 600,
  large: 900,
  hero: 1920,
};

// Generate srcSet for responsive images
export const generateSrcSet = (src: string): string => {
  const sizes = [320, 480, 640, 768, 1024, 1280, 1536];
  return sizes
    .map((size) => `${optimizeImage(src)}?w=${size} ${size}w`)
    .join(", ");
};
