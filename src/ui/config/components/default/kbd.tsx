import { CSSProperties } from 'react';

export const kbdConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '12px',
    fontFamily: 'monospace',
    fontWeight: '500',
  } as CSSProperties,

  sizes: {
    sm: { fontSize: '10px', padding: '1px 4px' },
    md: { fontSize: '12px', padding: '2px 6px' },
    lg: { fontSize: '14px', padding: '3px 8px' },
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
