import { CSSProperties } from 'react';

export const directionConfig = {
  base: {
    display: 'flex',
    width: '100%',
    height: '100%',
  } as CSSProperties,

  sizes: {
    sm: {},
    md: {},
    lg: {},
  } as Record<string, CSSProperties>,

  types: {
    default: (colors: any) => ({}),
    outline: (colors: any) => ({}),
    solid: (colors: any) => ({}),
    ghost: (colors: any) => ({}),
    inverse: (colors: any) => ({}),
    contrast: (colors: any) => ({}),
    soft: (colors: any) => ({}),
  } as Record<string, (colors: any) => CSSProperties>,
};
