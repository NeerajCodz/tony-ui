import { CSSProperties } from 'react';

const CLIP_PATH = 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)';

export const buttonConfig = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    whiteSpace: 'nowrap',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none',
    background: 'transparent',
    border: 'none',
    padding: 0, // Reset padding because we use inner content
  } as CSSProperties,

  sizes: {
    sm: { height: '2rem', fontSize: '0.75rem' },
    md: { height: '2.5rem', fontSize: '0.875rem' },
    lg: { height: '3rem', fontSize: '1rem' },
    xl: { height: '3.5rem', fontSize: '1.125rem' },
  } as Record<string, CSSProperties>,

  // The component will use these functions to style inner elements
  types: {
    default: (colors: any) => ({
      '--btn-bg': colors.base,
      '--btn-fg': colors.foreground,
      '--btn-border': colors.border,
      '--btn-glow': colors.glow,
      clipPath: CLIP_PATH,
    }),
    outline: (colors: any) => ({
      '--btn-bg': 'transparent',
      '--btn-fg': colors.base,
      '--btn-border': colors.base,
      '--btn-glow': colors.base,
      clipPath: CLIP_PATH,
    }),
    ghost: (colors: any) => ({
      '--btn-bg': 'transparent',
      '--btn-fg': colors.base,
      '--btn-border': 'transparent',
      '--btn-glow': 'transparent',
      clipPath: CLIP_PATH,
    }),
    solid: (colors: any) => ({
      '--btn-bg': colors.base,
      '--btn-fg': colors.foreground,
      '--btn-border': 'transparent', // Or match bg
      '--btn-glow': 'transparent',
      clipPath: CLIP_PATH,
    }),
  } as Record<string, (colors: any) => CSSProperties>,

  animations: {
    hover: {
      filter: 'brightness(1.2) drop-shadow(0 0 5px var(--btn-glow))',
    },
    active: {
      transform: 'scale(0.98)',
    },
  },
};
