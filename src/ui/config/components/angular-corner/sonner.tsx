/**
 * Angular Corner Sonner Toast Config
 * Beveled corners with tech-notches design
 */

import { CSSProperties } from 'react';

export const sonnerConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 1.25rem',
    borderRadius: '0',
    border: '2px solid',
    gap: '0.75rem',
    minHeight: '64px',
    backgroundColor: 'hsl(var(--background))',
    color: 'hsl(var(--foreground))',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
    position: 'relative',
  } as CSSProperties,

  types: {
    default: {
      backgroundColor: 'hsl(var(--background))',
      borderColor: 'hsl(var(--primary))',
      boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.3)',
    } as CSSProperties,

    filled: {
      backgroundColor: 'hsl(var(--primary))',
      borderColor: 'hsl(var(--primary) / 0.8)',
      color: 'hsl(var(--primary-foreground))',
      boxShadow: '0 0 30px rgba(var(--primary-rgb), 0.5)',
    } as CSSProperties,

    outline: {
      backgroundColor: 'transparent',
      borderColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary))',
      boxShadow: '0 0 15px rgba(var(--primary-rgb), 0.2)',
    } as CSSProperties,

    minimal: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'hsl(var(--foreground))',
      boxShadow: 'none',
      clipPath: 'none',
      padding: '0.5rem 0',
    } as CSSProperties,

    loader: {
      backgroundColor: 'hsl(var(--background))',
      borderColor: 'hsl(var(--primary))',
      boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.3)',
      position: 'relative',
    } as CSSProperties,
  } as Record<string, CSSProperties>,

  variants: {
    neutral: {
      borderColor: 'hsl(var(--muted-foreground))',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    } as CSSProperties,

    primary: {
      borderColor: 'hsl(var(--primary))',
      boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.3)',
    } as CSSProperties,

    success: {
      borderColor: 'hsl(var(--success))',
      boxShadow: '0 0 20px rgba(var(--success-rgb), 0.3)',
    } as CSSProperties,

    warning: {
      borderColor: 'hsl(var(--warning))',
      boxShadow: '0 0 20px rgba(var(--warning-rgb), 0.3)',
    } as CSSProperties,

    info: {
      borderColor: 'hsl(var(--info))',
      boxShadow: '0 0 20px rgba(var(--info-rgb), 0.3)',
    } as CSSProperties,

    destructive: {
      borderColor: 'hsl(var(--destructive))',
      boxShadow: '0 0 20px rgba(var(--destructive-rgb), 0.3)',
    } as CSSProperties,
  } as Record<string, CSSProperties>,

  title: {
    fontWeight: 700,
    fontSize: '0.95rem',
    lineHeight: '1.4',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
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
    color: 'hsl(var(--primary-foreground))',
    border: '1px solid hsl(var(--primary) / 0.6)',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  } as CSSProperties,

  cancelButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0',
    backgroundColor: 'transparent',
    color: 'hsl(var(--muted-foreground))',
    border: '1px solid hsl(var(--muted-foreground) / 0.5)',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  } as CSSProperties,
};
