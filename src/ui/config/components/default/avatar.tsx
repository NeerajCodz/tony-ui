import { CSSProperties } from 'react';

export const avatarConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    userSelect: 'none',
  } as CSSProperties,

  sizes: {
    sm: { width: '2rem', height: '2rem', fontSize: '0.875rem' },
    md: { width: '2.5rem', height: '2.5rem', fontSize: '1rem' },
    lg: { width: '3rem', height: '3rem', fontSize: '1.25rem' },
    xl: { width: '4rem', height: '4rem', fontSize: '1.5rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      borderRadius: '9999px',
      backgroundColor: colors.base,
      color: colors.foreground,
      border: `2px solid ${colors.border}`,
    }),
    square: (colors: any) => ({
      borderRadius: '0.375rem', // rounded-md
      backgroundColor: colors.base,
      color: colors.foreground,
      border: `2px solid ${colors.border}`,
    }),
  } as Record<string, (colors: any) => CSSProperties>,
};
