import { CSSProperties } from 'react';

export const alertConfig = {
  base: {
    position: 'relative',
    width: '100%',
    padding: '1rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem', 
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    transition: 'all 0.2s ease-in-out',
  } as CSSProperties,

  types: {
    default: (colors: any) => ({
      backgroundColor: colors.background || colors.base,
      color: colors.foreground,
      border: `1px solid ${colors.border}`,
    }),
    outline: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.foreground || colors.base,
      border: `1px solid ${colors.border || colors.base}`,
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
      color: colors.foreground || colors.base,
      border: '1px solid transparent',
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  title: {
    marginBottom: '0.25rem',
    fontWeight: 500,
    lineHeight: '1.25',
    letterSpacing: '-0.01em',
  } as CSSProperties,

  description: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    opacity: 0.9,
  } as CSSProperties,

  icon: {
    flexShrink: 0,
    width: '1rem',
    height: '1rem',
    marginTop: '0.125rem',
  } as CSSProperties,
};
