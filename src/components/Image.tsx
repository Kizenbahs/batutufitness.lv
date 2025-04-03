import { useState, useEffect } from 'react';

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
  className = '', 
  width, 
  height,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false
}: ImageProps) => {
  const [loading, setLoading] = useState(!priority);
  const [error, setError] = useState(false);

  // Generate WebP sources if available
  const generateSrcSet = () => {
    const basePath = src.substring(0, src.lastIndexOf('.')) || src;
    const ext = src.substring(src.lastIndexOf('.')) || '';
    return `
      ${basePath}-small${ext} 300w,
      ${basePath}-medium${ext} 600w,
      ${basePath}-large${ext} 900w
    `;
  };

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoading(false);
      img.onerror = () => setError(true);
    }
  }, [priority, src]);

  if (error) {
    return <div className={`bg-gray-200 ${className}`} style={{ width, height }} />;
  }

  return (
    <img
      src={src}
      srcSet={generateSrcSet()}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`${className} transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
      onLoad={() => setLoading(false)}
      onError={() => setError(true)}
    />
  );
}; 