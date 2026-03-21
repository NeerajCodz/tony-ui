import { CSSProperties } from 'react';

export const spinnerConfig = {
  base: {
    display: 'inline-block',
    borderRadius: '50%',
    border: '2px solid',
    borderTopColor: 'transparent',
    animation: 'spin 1s linear infinite',
  } as CSSProperties,

  sizes: {
    sm: { width: '16px', height: '16px', borderWidth: '2px' },
    md: { width: '24px', height: '24px', borderWidth: '2px' },
    lg: { width: '32px', height: '32px', borderWidth: '3px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      borderColor: colors.border,
      borderTopColor: 'transparent',
    }),
    outline: (colors: any) => ({
      borderColor: colors.border,
      borderTopColor: 'transparent',
    }),
    solid: (colors: any) => ({
      borderColor: colors.base,
      borderTopColor: 'transparent',
    }),
    ghost: (colors: any) => ({
      borderColor: colors.foreground,
      borderTopColor: 'transparent',
    }),
    inverse: (colors: any) => ({
      borderColor: colors.foreground,
      borderTopColor: 'transparent',
    }),
    contrast: (colors: any) => ({
      borderColor: colors.accent,
      borderTopColor: 'transparent',
    }),
    soft: (colors: any) => ({
      borderColor: colors.base,
      borderTopColor: 'transparent',
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
