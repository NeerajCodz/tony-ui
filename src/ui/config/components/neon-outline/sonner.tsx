/**
 * Neon Outline Sonner Toast Config
 * Intense neon glow with thick outer bloom
 */

import { CSSProperties } from 'react';

export const sonnerConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '0',
    border: '1px solid',
    gap: '0.75rem',
    minHeight: '64px',
    backgroundColor: '#000',
    color: 'hsl(var(--foreground))',
    boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)',
    position: 'relative',
  } as CSSProperties,

  types: {
    default: {
      backgroundColor: '#000',
      borderColor: 'hsl(var(--primary))',
      boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)',
    } as CSSProperties,

    filled: {
      backgroundColor: 'hsl(var(--primary) / 0.1)',
      borderColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary))',
      boxShadow: '0 0 30px hsl(var(--primary)), 0 0 60px hsl(var(--primary) / 0.4)',
    } as CSSProperties,

    outline: {
      backgroundColor: '#000',
      borderColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary))',
      boxShadow: '0 0 15px hsl(var(--primary)), 0 0 30px hsl(var(--primary) / 0.3)',
    } as CSSProperties,

    minimal: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'hsl(var(--primary))',
      boxShadow: 'none',
      padding: '0.5rem 0',
    } as CSSProperties,

    loader: {
      backgroundColor: '#000',
      borderColor: 'hsl(var(--primary))',
      boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)',
      position: 'relative',
    } as CSSProperties,
  } as Record<string, CSSProperties>,

  variants: {
    neutral: {
      borderColor: '#333',
      boxShadow: '0 0 15px rgba(100, 100, 100, 0.5)',
      color: '#ccc',
    } as CSSProperties,

    primary: {
      borderColor: 'hsl(var(--primary))',
      boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)',
      color: 'hsl(var(--primary))',
    } as CSSProperties,

    success: {
      borderColor: 'hsl(var(--success))',
      boxShadow: '0 0 20px hsl(var(--success)), 0 0 40px hsl(var(--success) / 0.5)',
      color: 'hsl(var(--success))',
    } as CSSProperties,

    warning: {
      borderColor: 'hsl(var(--warning))',
      boxShadow: '0 0 20px hsl(var(--warning)), 0 0 40px hsl(var(--warning) / 0.5)',
      color: 'hsl(var(--warning))',
    } as CSSProperties,

    info: {
      borderColor: 'hsl(var(--info))',
      boxShadow: '0 0 20px hsl(var(--info)), 0 0 40px hsl(var(--info) / 0.5)',
      color: 'hsl(var(--info))',
    } as CSSProperties,

    destructive: {
      borderColor: 'hsl(var(--destructive))',
      boxShadow: '0 0 20px hsl(var(--destructive)), 0 0 40px hsl(var(--destructive) / 0.5)',
      color: 'hsl(var(--destructive))',
    } as CSSProperties,
  } as Record<string, CSSProperties>,

  title: {
    fontWeight: 700,
    fontSize: '0.95rem',
    lineHeight: '1.4',
    color: 'hsl(var(--primary))',
    textShadow: '0 0 10px hsl(var(--primary) / 0.5)',
  } as CSSProperties,

  description: {
    fontSize: '0.875rem',
    lineHeight: '1.3',
    opacity: 0.9,
  } as CSSProperties,

  actionButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0',
    backgroundColor: 'hsl(var(--primary))',
    color: '#000',
    border: '1px solid hsl(var(--primary))',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 0 10px hsl(var(--primary))',
  } as CSSProperties,

  cancelButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0',
    backgroundColor: 'transparent',
    color: 'hsl(var(--primary))',
    border: '1px solid hsl(var(--primary) / 0.5)',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
  } as CSSProperties,
};
