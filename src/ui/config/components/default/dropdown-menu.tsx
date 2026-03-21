import { CSSProperties } from 'react';

export const dropdownMenuConfig = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '4px',
    borderRadius: '6px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    minWidth: '200px',
  } as CSSProperties,

  sizes: {
    sm: { minWidth: '160px', fontSize: '12px' },
    md: { minWidth: '200px', fontSize: '14px' },
    lg: { minWidth: '240px', fontSize: '16px' },
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
