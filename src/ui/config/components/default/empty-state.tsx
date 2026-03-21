import { CSSProperties } from 'react';

export const emptyStateConfig = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 24px',
    textAlign: 'center',
    gap: '16px',
  } as CSSProperties,

  sizes: {
    sm: { padding: '32px 16px', fontSize: '14px', gap: '12px' },
    md: { padding: '48px 24px', fontSize: '16px', gap: '16px' },
    lg: { padding: '64px 32px', fontSize: '18px', gap: '20px' },
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
