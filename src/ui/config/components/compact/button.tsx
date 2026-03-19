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
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.875rem',
  } as CSSProperties,

  sizes: {
    sm: { padding: '2px 6px', fontSize: '0.75rem' },
    md: { padding: '4px 8px', fontSize: '0.875rem' },
    lg: { padding: '6px 12px', fontSize: '1rem' },
    xl: { padding: '8px 16px', fontSize: '1.125rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.background,
      color: colors.foreground,
      border: `1px solid ${colors.border}`,
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
      backgroundColor: colors.primary,
      color: colors.primaryForeground,
      border: 'none',
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  animations: {
    hover: {
      opacity: 0.9,
    },
    active: {
      transform: 'scale(0.98)',
    },
  },
};
