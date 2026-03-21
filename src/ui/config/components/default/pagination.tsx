import { CSSProperties } from 'react';

export const paginationConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    justifyContent: 'center',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '12px', gap: '2px' },
    md: { fontSize: '14px', gap: '4px' },
    lg: { fontSize: '16px', gap: '6px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      color: colors.foreground,
    }),
    outline: (colors: any) => ({
      color: colors.foreground,
      borderColor: colors.border,
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
      color: colors.foreground,
      backgroundColor: colors.accent,
    }),
    soft: (colors: any) => ({
      color: colors.foreground,
      backgroundColor: `${colors.base}20`,
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
