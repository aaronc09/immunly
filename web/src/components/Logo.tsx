import { useTheme } from '../context/ThemeContext';

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  dark?: boolean;  // force dark version (e.g. on dark overlays in light mode)
  className?: string;
}

const TEAL = '#0AC6CB';

export default function Logo({ size = 32, showWordmark = true, dark, className }: LogoProps) {
  const { theme } = useTheme();
  const useDark = dark ?? theme === 'dark';

  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <img
        src={useDark ? '/icon2dark.png' : '/icon2light.png'}
        alt={showWordmark ? '' : 'Immunly'}
        height={size}
        width={size}
        style={{ display: 'block' }}
      />
      {showWordmark && (
        <span style={{ fontWeight: 800, fontSize: size * 0.62, letterSpacing: '-0.02em', color: 'inherit' }}>
          Immun<span style={{ color: TEAL }}>ly</span>
        </span>
      )}
    </span>
  );
}
