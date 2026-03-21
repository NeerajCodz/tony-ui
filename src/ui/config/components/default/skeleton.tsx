import { CSSProperties } from 'react';

export const skeletonConfig = {
  base: {
    display: 'block',
    borderRadius: '4px',
    animation: 'pulse 2s infinite',
  } as CSSProperties,

  sizes: {
    sm: { height: '16px' },
    md: { height: '24px' },
    lg: { height: '32px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
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
      backgroundColor: `${colors.base}40`,
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
