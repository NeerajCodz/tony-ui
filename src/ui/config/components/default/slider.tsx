import { CSSProperties } from 'react';

export const sliderConfig = {
  base: {
    position: 'relative',
    width: '100%',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  } as CSSProperties,

  sizes: {
    sm: { height: '16px' },
    md: { height: '20px' },
    lg: { height: '24px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      borderColor: colors.border,
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
