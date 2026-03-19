import { CSSProperties } from 'react';

export const buttonConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontWeight: 700,
    letterSpacing: '0.05em',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none',
    position: 'relative',
    textTransform: 'uppercase',
  } as CSSProperties,

  sizes: {
    sm: { padding: '0.5rem 1rem', fontSize: '0.75rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '0.875rem' },
    lg: { padding: '1rem 2rem', fontSize: '1rem' },
    xl: { padding: '1.25rem 2.5rem', fontSize: '1.125rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      '--btn-glow': colors.glow,
      backgroundColor: colors.base,
      color: colors.inverse || '#000',
      border: 'none',
      boxShadow: `0 0 10px ${colors.base}, 0 0 20px ${colors.glow}, 0 0 40px ${colors.glow}80`,
      textShadow: 'none',
    }),
    outline: (colors: any) => ({
      '--btn-glow': colors.glow,
      backgroundColor: 'transparent',
      color: colors.base,
      border: `2px solid ${colors.base}`,
      boxShadow: `inset 0 0 10px ${colors.glow}, 0 0 10px ${colors.glow}, 0 0 20px ${colors.glow}40`,
      textShadow: `0 0 5px ${colors.glow}`,
    }),
    ghost: (colors: any) => ({
      '--btn-glow': colors.glow,
      backgroundColor: 'transparent',
      color: colors.base,
      border: '1px solid transparent',
      boxShadow: 'none',
      textShadow: `0 0 8px ${colors.glow}, 0 0 15px ${colors.glow}`,
    }),
    solid: (colors: any) => ({
      '--btn-glow': colors.glow,
      backgroundColor: colors.base,
      color: colors.inverse || '#000',
      border: `2px solid ${colors.base}`,
      boxShadow: `0 0 15px ${colors.glow}, 0 0 30px ${colors.glow}80`,
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  animations: {
    hover: {
      boxShadow: '0 0 25px var(--btn-glow), 0 0 50px var(--btn-glow), inset 0 0 15px var(--btn-glow)',
      textShadow: '0 0 10px var(--btn-glow)',
      transform: 'scale(1.02)',
    },
    active: {
      transform: 'scale(0.95)',
    },
  },
};
