'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import type { ImageProps } from 'next/image';

interface HydrationSafeImageProps extends Omit<ImageProps, 'suppressHydrationWarning'> {
  suppressHydrationWarning?: boolean;
}

export default function HydrationSafeImage({ 
  suppressHydrationWarning = true,
  alt,
  ...props 
}: HydrationSafeImageProps) {
  useEffect(() => {
    // Clean up any browser extension attributes after mount
    const timer = setTimeout(() => {
      const images = document.querySelectorAll('img[data--h-bstatus], img[data--h-bresult]');
      images.forEach(img => {
        img.removeAttribute('data--h-bstatus');
        img.removeAttribute('data--h-bresult');
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Render with hydration protection
  return (
    <div suppressHydrationWarning={suppressHydrationWarning}>
      <Image
        {...props}
        alt={alt}
        suppressHydrationWarning={suppressHydrationWarning}
        onLoad={(e) => {
          // Remove any browser extension attributes that might cause hydration issues
          const img = e.target as HTMLImageElement;
          if (img) {
            img.removeAttribute('data--h-bstatus');
            img.removeAttribute('data--h-bresult');
          }
          props.onLoad?.(e);
        }}
      />
    </div>
  );
}