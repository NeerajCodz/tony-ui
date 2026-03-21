import { CSSProperties } from 'react';

export const switchConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'all 0.2s',
    position: 'relative',
  } as CSSProperties,

  sizes: {
    sm: { width: '32px', height: '18px' },
    md: { width: '40px', height: '22px' },
    lg: { width: '48px', height: '26px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.base,
      borderColor: colors.border,
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      borderColor: colors.border,
      border: '2px solid',
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.base,
    }),
    ghost: (colors: any) => ({
      backgroundColor: `${colors.base}40`,
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
