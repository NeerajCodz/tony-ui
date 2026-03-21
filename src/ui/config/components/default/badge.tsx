import { CSSProperties } from 'react';

export const badgeConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    fontWeight: '500',
    transition: 'all 0.2s',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '11px', padding: '2px 8px', height: '20px' },
    md: { fontSize: '12px', padding: '4px 10px', height: '24px' },
    lg: { fontSize: '14px', padding: '6px 12px', height: '28px' },
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
