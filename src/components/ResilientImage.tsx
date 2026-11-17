import { useState } from 'react';
import { Gamepad2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackGradient?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = 'h-full w-full object-cover',
  fallbackTitle,
  fallbackGradient = 'from-neutral-900 via-neutral-950 to-black',
  loading = 'eager',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br ${fallbackGradient} p-6 text-center ${className}`}
      >
        <Gamepad2 className="mb-3 h-8 w-8 text-neutral-400" aria-hidden="true" />
        {fallbackTitle && (
          <span className="font-display text-sm font-semibold tracking-tight text-neutral-200">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={loading}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
