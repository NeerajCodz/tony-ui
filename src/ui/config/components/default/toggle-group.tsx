import { CSSProperties } from 'react';

export const toggleGroupConfig = {
  base: {
    display: 'inline-flex',
    gap: '0',
    borderRadius: '6px',
    overflow: 'hidden',
  } as CSSProperties,

  sizes: {
    sm: { height: '32px' },
    md: { height: '40px' },
    lg: { height: '48px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      borderColor: colors.border,
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      borderColor: colors.border,
      border: '1px solid',
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.base,
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
    }),
    inverse: (colors: any) => ({
      backgroundColor: colors.foreground,
    }),
    contrast: (colors: any) => ({
      backgroundColor: colors.accent,
    }),
    soft: (colors: any) => ({
      backgroundColor: `${colors.base}20`,
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
