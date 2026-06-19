import React from 'react';

interface LogoProps {
  size?: number;       // icon height in px
  showWordmark?: boolean;
  className?: string;
}

/**
 * Immunly logo — an antibody (Y) rising out of an open book.
 * Drawn as inline SVG so it stays crisp and theme-aware (transparent background)
 * in both light and dark mode, unlike the raster /logo.png.
 */
export default function Logo({ size = 32, showWordmark = true, className }: LogoProps) {
  const dark = '#1B4B9E';
  const mid = '#2E62C4';
  const light = '#5B9BF5';
  const pale = '#AFCDF5';

  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Antibody — central stem + two arms */}
        <path d="M32 44 V30" stroke={mid} strokeWidth="6" strokeLinecap="round" />
        <path d="M32 31 L23 17" stroke={dark} strokeWidth="6" strokeLinecap="round" />
        <path d="M32 31 L41 17" stroke={dark} strokeWidth="6" strokeLinecap="round" />
        {/* Outer light arms */}
        <path d="M25 22 L17 30" stroke={light} strokeWidth="5" strokeLinecap="round" />
        <path d="M39 22 L47 30" stroke={light} strokeWidth="5" strokeLinecap="round" />
        {/* Open book */}
        <path
          d="M10 40 C18 36 26 36 32 40 C38 36 46 36 54 40 L54 52 C46 48 38 48 32 52 C26 48 18 48 10 52 Z"
          fill={pale}
          stroke={dark}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M32 40 V52" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      {showWordmark && (
        <span style={{ fontWeight: 800, fontSize: size * 0.62, letterSpacing: '-0.02em', color: 'inherit' }}>
          Immun<span style={{ color: light }}>ly</span>
        </span>
      )}
    </span>
  );
}
