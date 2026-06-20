// ── Immunly Dark Design System ────────────────────────────────────────────

export const Colors = {
  // Core backgrounds
  bg:          '#080E1C',   // Near-black navy
  bgCard:      '#0F1729',   // Card background
  bgElevated:  '#162035',   // Elevated card / sheet
  bgSurface:   '#1C2A45',   // Highest elevation

  // Borders
  border:      '#1E2D48',
  borderLight: '#253654',

  // Primary accents
  electric:    '#4F8EF7',   // Electric blue
  electricDim: '#2563EB',
  cyan:        '#22D3EE',
  cyanDim:     '#0891B2',
  purple:      '#A78BFA',
  purpleDim:   '#7C3AED',

  // Text
  text:        '#F1F5F9',
  textSub:     '#94A3B8',
  textMuted:   '#475569',
  textDim:     '#2D3F5C',

  // State
  success:     '#34D399',
  successBg:   '#064E3B',
  warning:     '#FBBF24',
  warningBg:   '#451A03',
  error:       '#F87171',
  errorBg:     '#450A0A',

  white: '#FFFFFF',
  black: '#000000',
};

// Module gradient pairs  [from, to]
export const MODULE_GRADIENTS: Record<number, [string, string]> = {
  1: ['#3B82F6', '#1D4ED8'],   // Blue
  2: ['#10B981', '#047857'],   // Emerald
  3: ['#F87171', '#DC2626'],   // Red
  4: ['#A78BFA', '#6D28D9'],   // Purple
  5: ['#FBBF24', '#D97706'],   // Amber
};

// Solid module accent colours (same hue, for non-gradient contexts)
export const MODULE_COLORS: Record<number, string> = {
  1: '#3B82F6',
  2: '#10B981',
  3: '#F87171',
  4: '#A78BFA',
  5: '#FBBF24',
};
