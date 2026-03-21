import { CSSProperties } from 'react';

export const popoverConfig = {
  base: {
    padding: '12px',
    borderRadius: '6px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    minWidth: '200px',
    maxWidth: '400px',
  } as CSSProperties,

  sizes: {
    sm: { padding: '8px', fontSize: '12px', minWidth: '160px' },
    md: { padding: '12px', fontSize: '14px', minWidth: '200px' },
    lg: { padding: '16px', fontSize: '16px', minWidth: '240px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      borderColor: colors.border,
    }),
    outline: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      borderColor: colors.border,
      border: '1px solid',
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.foreground,
    }),
    inverse: (colors: any) => ({
      backgroundColor: colors.foreground,
      color: colors.base,
    }),
    contrast: (colors: any) => ({
      backgroundColor: colors.accent,
      color: colors.foreground,
    }),
    soft: (colors: any) => ({
      backgroundColor: `${colors.base}20`,
      color: colors.foreground,
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
