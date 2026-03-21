import { CSSProperties } from 'react';

export const sheetConfig = {
  base: {
    position: 'fixed',
    backgroundColor: 'white',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    zIndex: 1000,
  } as CSSProperties,

  sizes: {
    sm: { width: '320px', padding: '16px' },
    md: { width: '480px', padding: '24px' },
    lg: { width: '640px', padding: '32px' },
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
