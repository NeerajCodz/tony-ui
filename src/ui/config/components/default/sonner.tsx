/**
 * Default Sonner Toast Config
 * Standard system toast with medium padding and border
 */

import { CSSProperties } from 'react';

export const sonnerConfig = {
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid',
    gap: '0.75rem',
    minHeight: '64px',
    backgroundColor: 'hsl(var(--background))',
    color: 'hsl(var(--foreground))',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  } as CSSProperties,

  types: {
    default: {
      backgroundColor: 'hsl(var(--background))',
      borderColor: 'hsl(var(--border))',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    } as CSSProperties,

    filled: {
      backgroundColor: 'hsl(var(--primary))',
      borderColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    } as CSSProperties,

    outline: {
      backgroundColor: 'transparent',
      borderColor: 'hsl(var(--primary))',
      color: 'hsl(var(--foreground))',
      boxShadow: 'none',
    } as CSSProperties,

    minimal: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'hsl(var(--foreground))',
      boxShadow: 'none',
      padding: '0.5rem 0',
    } as CSSProperties,

    loader: {
      backgroundColor: 'hsl(var(--background))',
      borderColor: 'hsl(var(--border))',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      position: 'relative',
    } as CSSProperties,
  } as Record<string, CSSProperties>,

  variants: {
    neutral: {
      backgroundColor: 'hsl(var(--muted))',
      borderColor: 'hsl(var(--muted-foreground))',
      color: 'hsl(var(--muted-foreground))',
    } as CSSProperties,

    primary: {
      backgroundColor: 'hsl(var(--primary) / 0.1)',
      borderColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary))',
    } as CSSProperties,

    success: {
      backgroundColor: 'hsl(var(--success) / 0.1)',
      borderColor: 'hsl(var(--success))',
      color: 'hsl(var(--success))',
    } as CSSProperties,

    warning: {
      backgroundColor: 'hsl(var(--warning) / 0.1)',
      borderColor: 'hsl(var(--warning))',
      color: 'hsl(var(--warning))',
    } as CSSProperties,

    info: {
      backgroundColor: 'hsl(var(--info) / 0.1)',
      borderColor: 'hsl(var(--info))',
      color: 'hsl(var(--info))',
    } as CSSProperties,

    destructive: {
      backgroundColor: 'hsl(var(--destructive) / 0.1)',
      borderColor: 'hsl(var(--destructive))',
      color: 'hsl(var(--destructive))',
    } as CSSProperties,
  } as Record<string, CSSProperties>,

  title: {
    fontWeight: 600,
    fontSize: '0.95rem',
    lineHeight: '1.4',
  } as CSSProperties,

  description: {
    fontSize: '0.875rem',
    lineHeight: '1.3',
    opacity: 0.8,
  } as CSSProperties,

  actionButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'opacity 0.2s ease-in-out',
  } as CSSProperties,

  cancelButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    backgroundColor: 'transparent',
    color: 'hsl(var(--muted-foreground))',
    border: '1px solid hsl(var(--muted))',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'opacity 0.2s ease-in-out',
  } as CSSProperties,
};
