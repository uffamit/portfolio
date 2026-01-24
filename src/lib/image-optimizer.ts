/**
 * Image Optimization Utilities
 * Provides helper functions for optimizing image loading and delivery
 */

/**
 * Generate responsive image sizes string for srcSet
 */
export const getResponsiveImageSizes = (maxWidth: number = 1200): string => {
  return `
    (max-width: 640px) 640px,
    (max-width: 750px) 750px,
    (max-width: 828px) 828px,
    (max-width: 1080px) 1080px,
    (max-width: 1200px) 1200px,
    (max-width: 1920px) 1920px,
    ${maxWidth}px
  `.trim();
};

/**
 * Generate Next.js Image component props with optimizations
 */
export const getOptimizedImageProps = (
  src: string,
  alt: string,
  priority: boolean = false,
  objectFit: 'cover' | 'contain' | 'fill' | 'scale-down' = 'cover',
) => {
  return {
    src,
    alt,
    priority,
    quality: 75,
    loading: priority ? 'eager' : 'lazy',
    sizes: getResponsiveImageSizes(),
    style: {
      objectFit,
      objectPosition: 'center',
    },
  };
};

/**
 * Check if the browser supports WebP format
 */
export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
};

/**
 * Check if the browser supports AVIF format
 */
export const supportsAVIF = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/avif').indexOf('image/avif') === 5;
};

/**
 * Get the best image format supported by the browser
 */
export const getBestImageFormat = (): 'avif' | 'webp' | 'jpeg' => {
  if (supportsAVIF()) return 'avif';
  if (supportsWebP()) return 'webp';
  return 'jpeg';
};

/**
 * Preload an image for better performance
 */
export const preloadImage = (src: string, priority: boolean = false): void => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  
  if (priority) {
    link.fetchPriority = 'high';
  }
  
  document.head.appendChild(link);
};

/**
 * Generate a blurred placeholder for LQIP (Low Quality Image Placeholder)
 */
export const generateBlurPlaceholder = (color: string = '#f0f0f0'): string => {
  const canvas = document.createElement('canvas');
  canvas.width = 10;
  canvas.height = 10;
  
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 10, 10);
  }
  
  return canvas.toDataURL();
};
