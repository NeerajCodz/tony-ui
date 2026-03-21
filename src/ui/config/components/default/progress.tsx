import { CSSProperties } from 'react';

export const progressConfig = {
  base: {
    width: '100%',
    height: '8px',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',
  } as CSSProperties,

  sizes: {
    sm: { height: '4px' },
    md: { height: '8px' },
    lg: { height: '12px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
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
