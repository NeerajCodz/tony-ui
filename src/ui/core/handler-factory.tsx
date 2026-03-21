'use client';

/**
 * Universal Handler Factory
 * 
 * High-performance dynamic component loader that:
 * 1. Loads component from /components/<version>/<component>.tsx
 * 2. Loads config from /config/components/<version>/<component>.tsx
 * 3. Loads variant from /config/variants/<variant>.json
 * 4. Merges styles and renders the component
 * 
 * Performance optimizations:
 * - Module cache prevents duplicate imports
 * - Preloaded variants for instant access
 * - Memoized style computation
 */

import React, { lazy, Suspense, useMemo, useEffect, useState, ComponentType, createContext, useContext } from 'react';
import type { Version, Variant, Size, VariantConfig, VariantColors, ComponentConfig } from '../types/common';
import { ComponentRenderer } from './renderer';

// ============================================================================
// CACHES - For performance
// ============================================================================

// Component module cache
const componentCache = new Map<string, ComponentType<any>>();

// Config module cache  
const configCache = new Map<string, ComponentConfig<any>>();

// Variant cache (preloaded)
const variantCache = new Map<string, VariantConfig>();

// Lazy component cache
const lazyComponentCache = new Map<string, React.LazyExoticComponent<any>>();

// ============================================================================
// VARIANT PRELOADER
// ============================================================================

// Import all variants statically for instant access
import defaultVariant from '../config/variants/default.json';
import primaryVariant from '../config/variants/primary.json';
import infoVariant from '../config/variants/info.json';
import successVariant from '../config/variants/success.json';
import warningVariant from '../config/variants/warning.json';
import destructiveVariant from '../config/variants/destructive.json';
import secondaryVariant from '../config/variants/secondary.json';
import accentVariant from '../config/variants/accent.json';
import neutralVariant from '../config/variants/neutral.json';
import inverseVariant from '../config/variants/inverse.json';
import dangerSoftVariant from '../config/variants/danger-soft.json';
import warningSoftVariant from '../config/variants/warning-soft.json';
import successSoftVariant from '../config/variants/success-soft.json';

// Preload all variants into cache
const preloadedVariants: Record<Variant, VariantConfig> = {
  default: defaultVariant as VariantConfig,
  primary: primaryVariant as VariantConfig,
  info: infoVariant as VariantConfig,
  success: successVariant as VariantConfig,
  warning: warningVariant as VariantConfig,
  destructive: destructiveVariant as VariantConfig,
  secondary: secondaryVariant as VariantConfig,
  accent: accentVariant as VariantConfig,
  neutral: neutralVariant as VariantConfig,
  inverse: inverseVariant as VariantConfig,
  'danger-soft': dangerSoftVariant as VariantConfig,
  'warning-soft': warningSoftVariant as VariantConfig,
  'success-soft': successSoftVariant as VariantConfig,
};

// Initialize variant cache
Object.entries(preloadedVariants).forEach(([key, value]) => {
  variantCache.set(key, value);
});

// ============================================================================
// DYNAMIC LOADERS
// ============================================================================

/**
 * Get variant colors from cache (instant)
 */
export function getVariantColors(variant: Variant): VariantColors {
  const config = variantCache.get(variant) || variantCache.get('default')!;
  // Merge accent from top-level config into colors object
  return {
    ...config.colors,
    accent: config.accent || config.colors.accent,
    icon: config.icon || config.colors.icon,
  };
}

/**
 * Create a cache key for component/config
 */
function getCacheKey(version: Version, component: string): string {
  return `${version}/${component}`;
}

/**
 * Dynamic component loader with caching
 */
function getOrCreateLazyComponent(version: Version, component: string): React.LazyExoticComponent<any> {
  const cacheKey = getCacheKey(version, component);
  
  if (!lazyComponentCache.has(cacheKey)) {
    const LazyComponent = lazy(() => 
      import(`../components/${version}/${component}.tsx`)
        .catch(() => {
          // Fallback to default version if specific version doesn't exist
          console.warn(`[UI] Component ${version}/${component} not found, falling back to default`);
          return import(`../components/default/${component}.tsx`);
        })
        .catch(() => {
          // Final fallback - return a placeholder
          console.error(`[UI] Component ${component} not found in any version`);
          return { default: () => <div>Component not found: {component}</div> };
        })
    );
    lazyComponentCache.set(cacheKey, LazyComponent);
  }
  
  return lazyComponentCache.get(cacheKey)!;
}

/**
 * Dynamic config loader with caching
 */
async function loadConfig(version: Version, component: string): Promise<ComponentConfig<any> | null> {
  const cacheKey = getCacheKey(version, component);
  
  if (configCache.has(cacheKey)) {
    return configCache.get(cacheKey)!;
  }
  
  try {
    const module = await import(`../config/components/${version}/${component}.tsx`);
    const config = module[`${component}Config`] || module.default || module;
    configCache.set(cacheKey, config);
    return config;
  } catch {
    // Try default version config
    try {
      const module = await import(`../config/components/default/${component}.tsx`);
      const config = module[`${component}Config`] || module.default || module;
      configCache.set(cacheKey, config);
      return config;
    } catch {
      return null;
    }
  }
}

// ============================================================================
// STYLE COMPUTATION
// ============================================================================

/**
 * Compute final styles from config + variant + type + size
 */
export function computeStyles(
  config: ComponentConfig<any> | null,
  colors: VariantColors,
  type: string = 'default',
  size: Size = 'md'
): React.CSSProperties {
  if (!config) {
    return {};
  }
  
  const baseStyles = config.base || {};
  const sizeStyles = config.sizes?.[size] || {};
  const typeStylesFn = config.types?.[type] || config.types?.['default'];
  const typeStyles = typeStylesFn ? typeStylesFn(colors) : {};
  
  return {
    ...baseStyles,
    ...sizeStyles,
    ...typeStyles,
  };
}

// ============================================================================
// HANDLER CONTEXT
// ============================================================================

interface HandlerContextValue {
  version: Version;
  variant: Variant;
  colors: VariantColors;
  type: string;
  size: Size;
}

const HandlerContext = createContext<HandlerContextValue | null>(null);

export function useHandlerContext() {
  return useContext(HandlerContext);
}

// ============================================================================
// UNIVERSAL HANDLER COMPONENT
// ============================================================================

export interface UniversalHandlerProps {
  /** Component name (e.g., 'button', 'card', 'accordion') */
  component: string;
  /** Design system version */
  version?: Version;
  /** Color variant */
  variant?: Variant;
  /** Component type (e.g., 'default', 'outline', 'ghost') */
  type?: string;
  /** Size */
  size?: Size;
  /** Loading skeleton component */
  skeleton?: React.ReactNode;
  /** Additional props passed to the component */
  [key: string]: any;
}

/**
 * Universal Handler Component
 * 
 * Usage:
 * <UniversalHandler component="button" version="angular-corner" variant="primary" type="outline" size="md">
 *   Click me
 * </UniversalHandler>
 */
export function UniversalHandler({
  component,
  version = 'default',
  variant = 'default',
  type = 'default',
  size = 'md',
  skeleton,
  children,
  ...props
}: UniversalHandlerProps) {
  const [config, setConfig] = useState<ComponentConfig<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const shouldLog = process.env.NODE_ENV !== 'production';
  
  // Get variant colors (instant from cache)
  const colors = useMemo(() => getVariantColors(variant), [variant]);

  useEffect(() => {
    if (shouldLog) {
      console.log('[UI] render', { component, version, variant, type, size });
    }
  }, [shouldLog, component, version, variant, type, size]);
  
  // Load config on mount
  useEffect(() => {
    let cancelled = false;
    
    loadConfig(version, component).then(loadedConfig => {
      if (!cancelled) {
        setConfig(loadedConfig);
        setIsLoading(false);
      }
    });
    
    return () => { cancelled = true; };
  }, [version, component]);
  
  // Compute styles
  const styles = useMemo(
    () => computeStyles(config, colors, type, size),
    [config, colors, type, size]
  );
  
  // Get lazy component
  const LazyComponent = useMemo(
    () => getOrCreateLazyComponent(version, component),
    [version, component]
  );
  
  // Context value
  const contextValue = useMemo<HandlerContextValue>(
    () => ({ version, variant, colors, type, size }),
    [version, variant, colors, type, size]
  );
  
  // Default skeleton
  const defaultSkeleton = (
    <div 
      className="animate-pulse bg-muted/20 rounded"
      style={{ 
        width: '100%', 
        height: size === 'sm' ? '2rem' : size === 'lg' ? '3rem' : '2.5rem' 
      }} 
    />
  );

  const renderedProps = useMemo(
    () => ({
      version,
      variant,
      type,
      size,
      colors,
      styles,
      config,
      ...props,
    }),
    [version, variant, type, size, colors, styles, config, props]
  );
  
  return (
    <HandlerContext.Provider value={contextValue}>
      <ComponentRenderer
        component={LazyComponent}
        props={renderedProps}
        wrapInSuspense
        suspenseFallback={skeleton || defaultSkeleton}
        filterDomProps={false}
      >
        {children}
      </ComponentRenderer>
    </HandlerContext.Provider>
  );
}

// ============================================================================
// HANDLER FACTORY
// ============================================================================

export interface CreateHandlerOptions {
  /** Default version for this component */
  defaultVersion?: Version;
  /** Default variant for this component */
  defaultVariant?: Variant;
  /** Default type for this component */
  defaultType?: string;
  /** Default size for this component */
  defaultSize?: Size;
  /** Custom skeleton component */
  skeleton?: React.ReactNode;
}

/**
 * Create a typed handler for a specific component
 * 
 * Usage:
 * const Button = createHandler('button', { defaultVersion: 'angular-corner' });
 * 
 * <Button variant="primary" type="outline">Click me</Button>
 */
export function createHandler<P extends object = {}>(
  componentName: string,
  options: CreateHandlerOptions = {}
) {
  const {
    defaultVersion = 'default',
    defaultVariant = 'default',
    defaultType = 'default',
    defaultSize = 'md',
    skeleton,
  } = options;
  
  type HandlerProps = Omit<UniversalHandlerProps, 'component'> & P;
  
  const Handler = React.forwardRef<any, HandlerProps>(
    ({ version = defaultVersion, variant = defaultVariant, type = defaultType, size = defaultSize, ...props }, ref) => {
      return (
        <UniversalHandler
          ref={ref}
          component={componentName}
          version={version}
          variant={variant}
          type={type}
          size={size}
          skeleton={skeleton}
          {...props}
        />
      );
    }
  );
  
  Handler.displayName = `${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Handler`;
  
  return Handler;
}

// ============================================================================
// EXPORTS
// ============================================================================

export default UniversalHandler;
