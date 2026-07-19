interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export default function Logo({ size = 32, showWordmark = true, className }: LogoProps) {
  const dark  = '#1A3F9A';
  const mid   = '#2D5FC4';
  const light = '#5B9BF5';
  const pale  = '#C8DDFA';

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
        {/* Stem — Fc region going into book spine */}
        <path d="M32 50 V29" stroke={mid} strokeWidth="6.5" strokeLinecap="round" />
        {/* Left heavy-chain Fab arm */}
        <path d="M32 31 L17 14" stroke={dark} strokeWidth="6" strokeLinecap="round" />
        {/* Right heavy-chain Fab arm */}
        <path d="M32 31 L47 14" stroke={dark} strokeWidth="6" strokeLinecap="round" />
        {/* Left light-chain arm (branches from left Fab, goes outward) */}
        <path d="M23 21 L10 27" stroke={light} strokeWidth="5" strokeLinecap="round" />
        {/* Right light-chain arm */}
        <path d="M41 21 L54 27" stroke={light} strokeWidth="5" strokeLinecap="round" />
        {/* Open book — left cover */}
        <path
          d="M10 41 C17 37 25 37 32 41 L32 54 C25 50 17 50 10 54 Z"
          fill={pale}
          stroke={dark}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Open book — right cover */}
        <path
          d="M54 41 C47 37 39 37 32 41 L32 54 C39 50 47 50 54 54 Z"
          fill={pale}
          stroke={dark}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Spine line */}
        <path d="M32 41 V54" stroke={dark} strokeWidth="2" strokeLinecap="round" />
        {/* Visible page edges at top of book */}
        <path d="M32 41 C30 39 27 39 24 40" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M32 41 C34 39 37 39 40 40" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
      {showWordmark && (
        <span style={{ fontWeight: 800, fontSize: size * 0.62, letterSpacing: '-0.02em', color: 'inherit' }}>
          Immun<span style={{ color: light }}>ly</span>
        </span>
      )}
    </span>
  );
}
