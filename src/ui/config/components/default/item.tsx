import { CSSProperties } from 'react';

export const itemConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    gap: '8px',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '12px', padding: '6px 10px' },
    md: { fontSize: '14px', padding: '8px 12px' },
    lg: { fontSize: '16px', padding: '10px 14px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: 'transparent',
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
