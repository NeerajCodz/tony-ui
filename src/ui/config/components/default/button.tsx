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
  } as CSSProperties,

  sizes: {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
    xl: { padding: '1.25rem 2.5rem', fontSize: '1.25rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      border: `1px solid ${colors.border}`,
      boxShadow: `0 0 10px ${colors.glow}40`, // 40 is opacity hex
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.base,
      border: `1px solid ${colors.base}`,
      boxShadow: 'none',
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.base,
      border: '1px solid transparent',
      boxShadow: 'none',
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      border: 'none',
      boxShadow: 'none',
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  animations: {
    hover: {
      transform: 'translateY(-1px)',
      filter: 'brightness(1.1)',
    },
    active: {
      transform: 'translateY(1px)',
      filter: 'brightness(0.95)',
    },
  },
};
