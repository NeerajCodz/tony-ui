import { CSSProperties } from 'react';

export const menubarConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px',
    borderRadius: '6px',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '12px', padding: '2px', gap: '2px' },
    md: { fontSize: '14px', padding: '4px', gap: '4px' },
    lg: { fontSize: '16px', padding: '6px', gap: '6px' },
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
