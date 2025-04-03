import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

export const Image = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    }

    const img = new window.Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setError(true);
  }, [src]);

  if (error) {
    return <div className={cn("bg-gray-200", className)} style={{ width, height }} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "transition-opacity duration-300",
        isLoading ? "opacity-0" : "opacity-100",
        className
      )}
      loading={priority ? "eager" : "lazy"}
    />
  );
}; 