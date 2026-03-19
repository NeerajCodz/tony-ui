import { CSSProperties } from 'react';

export const avatarConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    userSelect: 'none',
    boxSizing: 'border-box',
    borderRadius: '4px',
  } as CSSProperties,

  sizes: {
    sm: { width: '36px', height: '36px', fontSize: '12px' },
    md: { width: '44px', height: '44px', fontSize: '14px' },
    lg: { width: '52px', height: '52px', fontSize: '16px' },
    xl: { width: '68px', height: '68px', fontSize: '20px' },
    '2xl': { width: '100px', height: '100px', fontSize: '32px' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.foreground,
      boxShadow: `0 0 5px ${colors.base}, 0 0 10px ${colors.base}, inset 0 0 5px ${colors.base}40`,
      border: `2px solid ${colors.base}`,
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.base,
      border: `2px solid ${colors.base}`,
      boxShadow: `0 0 5px ${colors.base}`,
    }),
    solid: (colors: any) => ({
      backgroundColor: colors.base,
      color: colors.foreground,
      boxShadow: `0 0 15px ${colors.base}`,
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.base,
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
