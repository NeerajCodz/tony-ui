import { CSSProperties } from 'react';

export const tooltipConfig = {
  base: {
    padding: '6px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    whiteSpace: 'nowrap',
    maxWidth: '300px',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '10px', padding: '4px 8px', maxWidth: '200px' },
    md: { fontSize: '12px', padding: '6px 10px', maxWidth: '300px' },
    lg: { fontSize: '14px', padding: '8px 12px', maxWidth: '400px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
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
      backgroundColor: `${colors.base}e0`,
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
