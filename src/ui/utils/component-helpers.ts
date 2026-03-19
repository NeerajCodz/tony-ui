/**
 * Shared Component Utilities
 * Common helpers for all UI components
 */

import type { ColorType } from '../types/colors.d.js';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get CSS variable reference for a color
 * Format: hsl(var(--colorType-state))
 */
export function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

/**
 * Map variant name to the color type used for CSS variables
 */
export const VARIANT_COLOR_MAP: Record<string, string> = {
  primary: 'primary',
  neutral: 'primary',
  success: 'success',
  warning: 'warning',
  info: 'info',
  destructive: 'destructive',
};

/**
 * Resolve the active color type from variant + colorType props
 */
export function resolveColorType(variant: string, colorType: ColorType | string = 'primary'): string {
  return VARIANT_COLOR_MAP[variant] || colorType;
}

/**
 * Build type-specific styles (default/outline/solid)
 */
export function getTypeStyles(type: string, activeColorType: string): React.CSSProperties {
  const styles: Record<string, React.CSSProperties> = {
    default: {
      border: `1px solid ${getColorVar(activeColorType, 'border')}`,
      backgroundColor: getColorVar(activeColorType, 'background'),
    },
    outline: {
      border: `2px solid ${getColorVar(activeColorType, 'border')}`,
      backgroundColor: 'transparent',
    },
    solid: {
      border: 'none',
      backgroundColor: getColorVar(activeColorType, 'base'),
    },
  };
  return styles[type] || styles.default;
}

/**
 * Common component props shared by all components
 */
export type ComponentType = 'default' | 'outline' | 'solid';
export type ComponentVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
