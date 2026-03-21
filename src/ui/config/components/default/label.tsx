import { CSSProperties } from 'react';

export const labelConfig = {
  base: {
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '4px',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '12px', marginBottom: '2px' },
    md: { fontSize: '14px', marginBottom: '4px' },
    lg: { fontSize: '16px', marginBottom: '6px' },
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
    }),
    ghost: (colors: any) => ({
      color: colors.foreground,
    }),
    inverse: (colors: any) => ({
      color: colors.base,
    }),
    contrast: (colors: any) => ({
      color: colors.foreground,
    }),
    soft: (colors: any) => ({
      color: colors.foreground,
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
