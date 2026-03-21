import { CSSProperties } from 'react';

export const selectConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    width: '100%',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '12px', padding: '6px 10px', height: '32px' },
    md: { fontSize: '14px', padding: '8px 12px', height: '40px' },
    lg: { fontSize: '16px', padding: '10px 14px', height: '48px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      borderColor: colors.border,
      border: '1px solid',
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
