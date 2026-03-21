import { CSSProperties } from 'react';

export const checkboxConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: '0.25rem',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    outline: 'none',
  } as CSSProperties,

  sizes: {
    sm: { width: '1rem', height: '1rem', fontSize: '0.75rem' },
    md: { width: '1.25rem', height: '1.25rem', fontSize: '0.875rem' },
    lg: { width: '1.5rem', height: '1.5rem', fontSize: '1rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      border: `2px solid ${colors.border}`,
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.base,
      border: `2px solid ${colors.base}`,
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      border: 'none',
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
