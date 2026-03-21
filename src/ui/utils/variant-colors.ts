import type { Variant, VariantConfig } from '../types/common';

export async function loadVariantColors(variant: Variant): Promise<VariantConfig> {
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

export function getVariantCSSVariables(colors: VariantConfig['colors']): Record<string, string> {
  return {
    '--variant-base': colors.base,
    '--variant-foreground': colors.foreground,
    '--variant-border': colors.border,
    '--variant-glow': colors.glow,
  };
}
