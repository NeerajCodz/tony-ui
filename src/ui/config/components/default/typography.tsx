import { CSSProperties } from 'react';

export const typographyConfig = {
  base: {
    margin: '0',
    padding: '0',
    lineHeight: '1.5',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '12px', lineHeight: '1.5' },
    md: { fontSize: '14px', lineHeight: '1.5' },
    lg: { fontSize: '16px', lineHeight: '1.6' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      color: colors.foreground,
    }),
    outline: (colors: any) => ({
      color: colors.foreground,
    }),
    solid: (colors: any) => ({
      color: colors.foreground,
      backgroundColor: colors.base,
    }),
    ghost: (colors: any) => ({
      color: colors.foreground,
    }),
    inverse: (colors: any) => ({
      color: colors.base,
      backgroundColor: colors.foreground,
    }),
    contrast: (colors: any) => ({
      color: colors.accent,
    }),
    soft: (colors: any) => ({
      color: colors.foreground,
      backgroundColor: `${colors.base}20`,
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
