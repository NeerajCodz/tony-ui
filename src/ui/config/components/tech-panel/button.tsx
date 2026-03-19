import { CSSProperties } from 'react';

export const buttonConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    whiteSpace: 'nowrap',
    fontWeight: 600,
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    overflow: 'hidden',
  } as CSSProperties,

  sizes: {
    sm: { padding: '0.4rem 1.2rem', fontSize: '0.75rem' },
    md: { padding: '0.75rem 2rem', fontSize: '0.875rem' },
    lg: { padding: '1rem 2.5rem', fontSize: '1rem' },
    xl: { padding: '1.25rem 3rem', fontSize: '1.125rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      '--btn-bg': `${colors.base}20`, // 20% opacity
      '--btn-border': colors.border,
      '--btn-accent': colors.glow,
      background: 'var(--btn-bg)',
      color: colors.foreground,
      border: `1px solid var(--btn-border)`,
      borderLeft: `4px solid var(--btn-accent)`,
    }),
    outline: (colors: any) => ({
      '--btn-bg': 'transparent',
      '--btn-border': colors.base,
      '--btn-accent': colors.base,
      background: 'transparent',
      color: colors.base,
      border: `1px solid var(--btn-border)`,
      borderLeft: `4px solid var(--btn-accent)`,
    }),
    ghost: (colors: any) => ({
      '--btn-bg': 'transparent',
      '--btn-border': 'transparent',
      '--btn-accent': colors.base,
      background: 'transparent',
      color: colors.base,
      border: '1px solid transparent',
      borderLeft: `4px solid transparent`,
    }),
    solid: (colors: any) => ({
      '--btn-bg': colors.base,
      '--btn-border': colors.border,
      '--btn-accent': colors.foreground,
      background: colors.base,
      color: colors.foreground,
      border: `1px solid var(--btn-border)`,
      borderLeft: `4px solid var(--btn-accent)`,
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  animations: {
    hover: {
      background: 'linear-gradient(90deg, var(--btn-bg) 0%, var(--btn-bg) 100%)', // Fallback
      paddingLeft: 'calc(var(--padding-left) + 4px)', // Shift right slightly? No, can't easily calc here without more context.
    },
    active: {
      transform: 'translateX(2px)',
    },
  },
};
