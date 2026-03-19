import { CSSProperties } from 'react';

export const dialogConfig = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(4px)',
    zIndex: 50,
  } as CSSProperties,

  content: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '32rem', // max-w-lg
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    zIndex: 50,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    outline: 'none',
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
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: '1.5',
    marginBottom: '0.25rem',
  } as CSSProperties,

  description: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    opacity: 0.7,
  } as CSSProperties,
};
