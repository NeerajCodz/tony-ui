import { CSSProperties } from 'react';

export const inputOtpConfig = {
  base: {
    display: 'inline-flex',
    gap: '8px',
    alignItems: 'center',
  } as CSSProperties,

  sizes: {
    sm: { gap: '6px', fontSize: '14px' },
    md: { gap: '8px', fontSize: '16px' },
    lg: { gap: '10px', fontSize: '18px' },
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
