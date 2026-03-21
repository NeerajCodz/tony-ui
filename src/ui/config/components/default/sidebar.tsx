import { CSSProperties } from 'react';

export const sidebarConfig = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '256px',
    height: '100vh',
    padding: '16px',
    borderRight: '1px solid',
    transition: 'all 0.3s',
  } as CSSProperties,

  sizes: {
    sm: { width: '200px', padding: '12px' },
    md: { width: '256px', padding: '16px' },
    lg: { width: '320px', padding: '20px' },
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
