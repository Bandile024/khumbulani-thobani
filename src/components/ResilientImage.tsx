import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel = 'Town Planning & Land Use Management',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#101814] text-[#E2E6E3] p-6 text-center cadastral-grid-dark ${className}`}
        role="img"
        aria-label={alt}
      >
        <MapPin className="w-6 h-6 text-[#22C55E] mb-2 opacity-80" />
        <span className="font-serif text-lg tracking-tight text-white">
          {fallbackLabel}
        </span>
        <span className="text-xs text-[#9CA8A1] mt-1">
          Pretoria · Secunda · eMbalenhle
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      style={{ transition: 'opacity 0.6s ease-out' }}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};
