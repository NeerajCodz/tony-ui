import { CSSProperties } from 'react';

export const buttonConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: 'none',
  } as CSSProperties,

  sizes: {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
    xl: { padding: '1.25rem 2.5rem', fontSize: '1.25rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.background,
      color: colors.foreground,
    }),
    outline: (colors: any) => ({
      backgroundColor: colors.background,
      color: colors.primary,
      border: `1px solid ${colors.border}`, // Raised usually implies solid bg, but outline could be just a border on a raised card
    }),
    ghost: (colors: any) => ({
      backgroundColor: colors.background, // Raised ghost? Maybe just minimal shadow
      color: colors.foreground,
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.primary,
      color: colors.primaryForeground,
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  animations: {
    hover: {
      transform: 'translateY(-1px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    active: {
      transform: 'translateY(1px)',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    },
  },
};
