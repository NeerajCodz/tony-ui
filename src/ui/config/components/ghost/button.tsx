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
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    backgroundColor: 'transparent', // Ghost default
  } as CSSProperties,

  sizes: {
    sm: { padding: '0.25rem 0.5rem', fontSize: '0.875rem' },
    md: { padding: '0.5rem 1rem', fontSize: '1rem' },
    lg: { padding: '0.75rem 1.5rem', fontSize: '1.125rem' },
    xl: { padding: '1rem 2rem', fontSize: '1.25rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      color: colors.foreground,
      border: '1px solid transparent',
    }),
    outline: (colors: any) => ({
      color: colors.primary,
      border: `1px solid ${colors.primary}`, // Becomes outline
    }),
    ghost: (colors: any) => ({
      color: colors.mutedForeground,
      border: '1px solid transparent',
    }),
    solid: (colors: any) => ({
      backgroundColor: 'transparent', // Still ghost-like
      color: colors.primary,
      border: '1px solid transparent',
      fontWeight: 600,
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  animations: {
    hover: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)', // Light gray on hover
    },
    active: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
};
