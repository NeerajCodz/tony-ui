import { CSSProperties } from 'react';

export const cardConfig = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.5rem',
    backgroundColor: 'transparent', // Default to transparent, overridden by types
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
  } as CSSProperties,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.background || colors.base,
      color: colors.foreground,
      border: `1px solid ${colors.border}`,
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.foreground || colors.base,
      border: `1px solid ${colors.border || colors.base}`,
      boxShadow: 'none',
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.foreground || colors.base,
      border: '1px solid transparent',
      boxShadow: 'none',
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  sizes: {
    sm: { padding: '1rem' },
    md: { padding: '1.5rem' },
    lg: { padding: '2rem' },
    none: { padding: '0' },
  } as Record<string, CSSProperties>,
};
