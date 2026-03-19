import { CSSProperties } from 'react';

export const buttonConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1.125rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  } as CSSProperties,

  sizes: {
    sm: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    md: { padding: '1rem 2rem', fontSize: '1.125rem' },
    lg: { padding: '1.25rem 2.5rem', fontSize: '1.25rem' },
    xl: { padding: '1.5rem 3rem', fontSize: '1.5rem' },
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
      border: `2px solid ${colors.primary}`,
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.foreground,
      border: '2px solid transparent',
      boxShadow: 'none',
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.secondary,
      color: colors.secondaryForeground,
      border: 'none',
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  animations: {
    hover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    active: {
      transform: 'translateY(0)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  },
};
