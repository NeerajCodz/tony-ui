import { CSSProperties } from 'react';

export const toastConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: '6px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
    gap: '12px',
    minWidth: '300px',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '12px', padding: '8px 12px', minWidth: '240px' },
    md: { fontSize: '14px', padding: '12px 16px', minWidth: '300px' },
    lg: { fontSize: '16px', padding: '16px 20px', minWidth: '360px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      borderColor: colors.border,
    }),
    outline: (colors: any) => ({
      backgroundColor: colors.base,
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
