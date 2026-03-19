import { CSSProperties } from 'react';

export const buttonConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none',
    borderRadius: '9999px', // Pill shape
    padding: '0.5rem 1.5rem',
  } as CSSProperties,

  sizes: {
    sm: { padding: '0.25rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.5rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '0.75rem 2rem', fontSize: '1.125rem' },
    xl: { padding: '1rem 2.5rem', fontSize: '1.25rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.primary,
      color: colors.primaryForeground,
      border: 'none',
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.primary,
      border: `1px solid ${colors.primary}`,
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.foreground,
      border: '1px solid transparent',
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.secondary,
      color: colors.secondaryForeground,
      border: 'none',
    }),
    inverse: (colors: any) => ({
      backgroundColor: colors.foreground,
      color: colors.base,
      border: `1px solid ${colors.foreground}`,
    }),
    contrast: (colors: any) => ({
      backgroundColor: colors.accent?.primary || colors.foreground,
      color: '#000000',
      fontWeight: 'bold',
      border: `1px solid ${colors.foreground}`,
    }),
    soft: (colors: any) => ({
      backgroundColor: colors.accent?.rgb ? `rgba(${colors.accent.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors.accent.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
      color: colors.accent?.primary || colors.foreground,
      border: 'none',
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  animations: {
    hover: {
      opacity: 0.9,
    },
    active: {
      transform: 'scale(0.95)',
    },
  },
};
