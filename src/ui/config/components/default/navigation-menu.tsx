import { CSSProperties } from 'react';

export const navigationMenuConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '12px', gap: '4px', padding: '4px' },
    md: { fontSize: '14px', gap: '8px', padding: '8px' },
    lg: { fontSize: '16px', gap: '12px', padding: '12px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
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
