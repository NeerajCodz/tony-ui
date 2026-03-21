import { CSSProperties } from 'react';

export const separatorConfig = {
  base: {
    width: '100%',
    height: '1px',
    margin: '8px 0',
  } as CSSProperties,

  sizes: {
    sm: { height: '1px', margin: '4px 0' },
    md: { height: '1px', margin: '8px 0' },
    lg: { height: '2px', margin: '12px 0' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.border,
    }),
    outline: (colors: any) => ({
      backgroundColor: colors.border,
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.base,
    }),
    ghost: (colors: any) => ({
      backgroundColor: `${colors.border}40`,
    }),
    inverse: (colors: any) => ({
      backgroundColor: colors.foreground,
    }),
    contrast: (colors: any) => ({
      backgroundColor: colors.accent,
    }),
    soft: (colors: any) => ({
      backgroundColor: `${colors.base}20`,
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
