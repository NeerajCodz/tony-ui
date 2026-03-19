import type { Variant } from '../types/common';

export interface VariantColors {
  name: string;
  colors: {
    base: string;
    foreground: string;
    border: string;
    glow: string;
  };
}

export async function loadVariantColors(variant: Variant): Promise<VariantColors> {
  try {
    const colors = await import(`../config/variants/${variant}.json`);
    return colors.default || colors;
  } catch (error) {
    console.error(`Failed to load variant colors for ${variant}:`, error);
    // Fallback to primary variant
    const fallback = await import('../config/variants/primary.json');
    return fallback.default || fallback;
  }
}

export function getVariantCSSVariables(colors: VariantColors['colors']): Record<string, string> {
  return {
    '--variant-base': colors.base,
    '--variant-foreground': colors.foreground,
    '--variant-border': colors.border,
    '--variant-glow': colors.glow,
  };
}
