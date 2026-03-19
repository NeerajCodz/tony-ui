import { CSSProperties } from 'react';

export const inputConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    borderRadius: '0.375rem',
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
  } as CSSProperties,

  sizes: {
    sm: { height: '2rem', padding: '0.25rem 0.5rem', fontSize: '0.75rem' },
    md: { height: '2.5rem', padding: '0.5rem 0.75rem', fontSize: '0.875rem' },
    lg: { height: '3rem', padding: '0.75rem 1rem', fontSize: '1rem' },
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.background || 'transparent',
      color: colors.text,
      border: `1px solid ${colors.border}`,
      boxShadow: 'none',
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.accent?.primary || colors.text,
      border: `1px solid ${colors.accent?.primary || colors.border}`,
      boxShadow: 'none',
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.textHover || colors.text,
      border: '1px solid transparent',
      boxShadow: 'none',
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  states: {
    focus: (colors: any) => ({
      borderColor: colors.accent?.primary || colors.border,
      boxShadow: `0 0 0 2px ${colors.background}, 0 0 0 4px ${colors.accent?.primary}40`,
    }),
    disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
};
