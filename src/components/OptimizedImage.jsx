import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Gerar srcset otimizado
  const generateSrcSet = (originalSrc) => {
    if (!originalSrc) return '';
    
    // Para imagens do Unsplash, otimizar tamanhos
    if (originalSrc.includes('unsplash.com')) {
      const baseUrl = originalSrc.split('?')[0];
      return `${baseUrl}?w=400&q=80 400w, ${baseUrl}?w=800&q=80 800w, ${baseUrl}?w=1200&q=80 1200w`;
    }
    
    // Para outras imagens, manter original
    return originalSrc;
  };

  // Gerar WebP se suportado
  const generateWebPSrc = (originalSrc) => {
    if (!originalSrc) return '';
    
    if (originalSrc.includes('unsplash.com')) {
      return originalSrc.replace('auto=format', 'auto=format&fm=webp');
    }
    
    return originalSrc;
  };

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px' 
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  const webpSrc = generateWebPSrc(src);
  const srcSet = generateSrcSet(src);

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`} 
      style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
      {...props}
    >
      {/* Placeholder com blur */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ 
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}
      
      {/* Imagem WebP (se suportado) */}
      {isInView && !hasError && (
        <picture>
          <source 
            srcSet={webpSrc} 
            type="image/webp" 
            media="(min-width: 1px)"
          />
          <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            width={width}
            height={height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
      )}
      
      {/* Fallback para erro */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Erro ao carregar imagem</span>
        </div>
      )}
      
      {/* CSS para shimmer effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;
