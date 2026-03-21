import { CSSProperties } from 'react';

export const inputGroupConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    borderRadius: '6px',
    overflow: 'hidden',
  } as CSSProperties,

  sizes: {
    sm: { height: '32px', fontSize: '12px' },
    md: { height: '40px', fontSize: '14px' },
    lg: { height: '48px', fontSize: '16px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      borderColor: colors.border,
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
