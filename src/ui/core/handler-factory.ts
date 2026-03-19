/**
 * Dynamic Component Handler Factory
 * Loads components, configs, and variants at runtime without hardcoding
 */

import React, { lazy, Suspense, useMemo, useCallback } from 'react';

interface ComponentConfig {
  base?: Record<string, any>;
  sizes?: Record<string, Record<string, any>>;
  types?: Record<string, (colors: any) => Record<string, any>>;
  states?: Record<string, Record<string, any>>;
}

interface VariantConfig {
  name: string;
  colors: {
    base: string;
    foreground: string;
    border: string;
    glow: string;
  };
}

interface HandlerProps {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  [key: string]: any;
}

/**
 * Core Handler Factory - Orchestrates dynamic loading
 */
export function createComponentHandler(
  componentName: string,
  versions: string[]
): React.FC<HandlerProps> {
  return function ComponentHandler({
    version = 'default',
    variant = 'primary',
    type,
    size = 'md',
    ...props
  }: HandlerProps) {
    // Memoize the component loading logic
    const LazyComponent = useMemo(() => {
      if (!versions.includes(version)) {
        console.warn(`[Handler] Version '${version}' not found for ${componentName}, falling back to 'default'`);
        return lazy(() => import(`../components/default/${componentName}.tsx`));
      }
      return lazy(() => import(`../components/${version}/${componentName}.tsx`));
    }, [version]);

    // Load and merge configuration
    const loadConfig = useCallback(async () => {
      try {
        const configModule = await import(`../config/components/${version}/${componentName}.tsx`);
        return configModule.config as ComponentConfig;
      } catch (error) {
        console.warn(`[Handler] Config not found for ${version}/${componentName}`);
        return {} as ComponentConfig;
      }
    }, [version]);

    // Load variant colors dynamically
    const loadVariant = useCallback(async () => {
      try {
        const variantModule = await import(`../config/variants/${variant}.json`);
        return variantModule.default as VariantConfig;
      } catch (error) {
        console.warn(`[Handler] Variant '${variant}' not found, falling back to 'primary'`);
        return await import(`../config/variants/primary.json`).then(m => m.default);
      }
    }, [variant]);

    // Compute merged styles
    const computedStyles = useMemo(() => {
      return async () => {
        const [config, variantData] = await Promise.all([loadConfig(), loadVariant()]);

        // Build style object
        const baseStyles = config.base || {};
        const sizeStyles = config.sizes?.[size] || {};
        const typeFn = config.types?.[type || 'default'];
        const typeStyles = typeFn ? typeFn(variantData.colors) : {};

        return {
          ...baseStyles,
          ...sizeStyles,
          ...typeStyles,
          '--variant-base': variantData.colors.base,
          '--variant-foreground': variantData.colors.foreground,
          '--variant-border': variantData.colors.border,
          '--variant-glow': variantData.colors.glow,
        } as React.CSSProperties;
      };
    }, [loadConfig, loadVariant, size, type]);

    // Render with lazy loading and Suspense
    return (
      <Suspense fallback={<div className="animate-pulse bg-muted h-10 rounded" />}>
        <LazyComponent
          version={version}
          variant={variant}
          type={type}
          size={size}
          {...props}
        />
      </Suspense>
    );
  };
}

/**
 * Helper to create a handler with predefined versions
 */
export function createVersionedHandler(
  componentName: string
) {
  const versions = [
    'angular-corner',
    'border',
    'circuit-board',
    'compact',
    'data-panel',
    'default',
    'energy-shield',
    'ghost',
    'glass-morphism',
    'holo-frame',
    'large',
    'matrix-grid',
    'neon-outline',
    'padding',
    'quantum-gate',
    'raised',
    'tactical-hud',
    'tech-panel',
    'terminal-window',
  ];

  return createComponentHandler(componentName, versions);
}
