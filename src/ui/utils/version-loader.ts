/**
 * Version Loader Utility
 * Dynamically loads components, configs, and variants based on version
 */

import type { Version, Variant, VariantConfig, VariantColors } from '../types/common';

// ============================================================================
// CACHES
// ============================================================================

const componentCache = new Map<string, any>();
const configCache = new Map<string, any>();
const variantCache = new Map<string, VariantConfig>();

// ============================================================================
// COMPONENT LOADING
// ============================================================================

/**
 * Load a component dynamically based on version
 */
export async function loadComponent(
  componentName: string,
  version: Version
): Promise<any> {
  const cacheKey = `${version}/${componentName}`;
  
  if (componentCache.has(cacheKey)) {
    return componentCache.get(cacheKey);
  }

  try {
    const module = await import(`../components/${version}/${componentName}.tsx`);
    const component = module.default || Object.values(module)[0];
    componentCache.set(cacheKey, component);
    return component;
  } catch {
    if (version !== 'default') {
      return loadComponent(componentName, 'default');
    }
    throw new Error(`Component ${componentName} not found`);
  }
}

/**
 * Load component config based on version
 */
export async function loadConfig(
  componentName: string,
  version: Version
): Promise<any> {
  const cacheKey = `${version}/${componentName}`;
  
  if (configCache.has(cacheKey)) {
    return configCache.get(cacheKey);
  }

  try {
    const module = await import(`../config/components/${version}/${componentName}.tsx`);
    const config = module.default || module[`${componentName}Config`] || Object.values(module)[0];
    configCache.set(cacheKey, config);
    return config;
  } catch {
    if (version !== 'default') {
      return loadConfig(componentName, 'default');
    }
    return { base: {}, sizes: {}, types: {} };
  }
}

/**
 * Load variant colors from JSON config
 */
export async function loadVariant(variant: Variant): Promise<VariantConfig> {
  if (variantCache.has(variant)) {
    return variantCache.get(variant)!;
  }

  try {
    const module = await import(`../config/variants/${variant}.json`);
    const config = module.default || module;
    variantCache.set(variant, config);
    return config;
  } catch {
    if (variant !== 'default') {
      return loadVariant('default');
    }
    return {
      name: 'default',
      colors: {
        base: '#64748b',
        foreground: '#ffffff',
        border: '#475569',
        glow: '#94a3b8',
      },
    };
  }
}

// ============================================================================
// STYLE MERGING
// ============================================================================

/**
 * Merge styles from config, size, type, and variant
 */
export function mergeStyles(
  config: any,
  size: string,
  type: string,
  variantColors: VariantColors,
  customStyle?: React.CSSProperties
): React.CSSProperties {
  const baseStyles = config?.base || {};
  const sizeStyles = config?.sizes?.[size] || {};
  const typeStylesFn = config?.types?.[type] || config?.types?.default;
  const typeStyles = typeStylesFn ? typeStylesFn(variantColors) : {};

  return {
    ...baseStyles,
    ...sizeStyles,
    ...typeStyles,
    ...customStyle,
  };
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get all available versions for a component
 */
export async function getAvailableVersions(componentName: string): Promise<Version[]> {
  const versions: Version[] = [
    'angular-corner', 'circuit-board', 'data-panel', 'default',
    'energy-shield', 'holo-frame', 'matrix-grid', 'neon',
    'quantum-gate', 'tactical-hud', 'tech-panel', 'terminal-window',
  ];

  const available: Version[] = [];
  
  for (const version of versions) {
    try {
      await import(`../components/${version}/${componentName}.tsx`);
      available.push(version);
    } catch {
      // Component not available in this version
    }
  }
  
  return available;
}

/**
 * Clear all caches
 */
export function clearCaches(): void {
  componentCache.clear();
  configCache.clear();
  variantCache.clear();
}

/**
 * Preload components for performance
 */
export function preloadComponent(componentName: string, versions: Version[]): void {
  versions.forEach(version => {
    loadComponent(componentName, version).catch(() => {});
    loadConfig(componentName, version).catch(() => {});
  });
}
