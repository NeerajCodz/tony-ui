import { CSSProperties } from 'react';

export const drawerConfig = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(2px)',
    zIndex: 50,
  } as CSSProperties,

  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    boxShadow: '0 -4px 24px rgba(0,0,0,0.15)',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    outline: 'none',
    zIndex: 50,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '96%',
  } as CSSProperties,

  handle: {
    width: '3rem',
    height: '0.375rem',
    borderRadius: '9999px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    margin: '0.75rem auto',
    marginBottom: '0',
  } as CSSProperties,
  
  types: {
    default: (colors: any) => ({
      backgroundColor: colors.background || colors.base,
      color: colors.foreground,
    }),
    outline: (colors: any) => ({
       backgroundColor: colors.background || colors.base,
       borderTop: `1px solid ${colors.border}`,
       color: colors.foreground,
    }),
    ghost: (colors: any) => ({
      backgroundColor: 'transparent',
      backdropFilter: 'blur(10px)',
      color: colors.foreground,
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  title: {
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: '1.5',
    marginBottom: '0.25rem',
  } as CSSProperties,

  description: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    opacity: 0.7,
  } as CSSProperties,
};
