import { CSSProperties } from 'react';

export const resizableConfig = {
  base: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
  } as CSSProperties,

  sizes: {
    sm: { minWidth: '200px', minHeight: '200px' },
    md: { minWidth: '400px', minHeight: '400px' },
    lg: { minWidth: '600px', minHeight: '600px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      borderColor: colors.border,
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      borderColor: colors.border,
      border: '1px solid',
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.base,
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
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
