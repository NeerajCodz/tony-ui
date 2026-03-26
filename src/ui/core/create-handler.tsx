/**
 * Dynamic Handler Factory
 * Creates component handlers that dynamically load:
 * - Component from /components/<version>/<component>.tsx
 * - Config from /config/components/<version>/<component>.tsx
 * - Variant from /config/variants/<variant>.json
 * 
 * Optimized for performance with lazy loading and caching
 */

import React, { lazy, Suspense, useMemo, ComponentType, forwardRef } from 'react';
import type { Version, Variant, Size, VariantColors } from '../types/common';
import { useVersion } from './version-context';

// ============================================================================
// TYPES
// ============================================================================

export interface HandlerParams {
  version?: Version;
  variant?: Variant;
  type?: string;
  size?: Size;
  effects?: string;
}

export interface HandlerConfig {
  componentName: string;
  exportName?: string;
  defaultVersion?: Version;
  defaultVariant?: Variant;
  defaultType?: string;
  defaultSize?: Size;
  fallbackComponent?: ComponentType<any>;
  loadingComponent?: ComponentType<any>;
  subComponents?: string[];
}

// ============================================================================
// CACHES (for performance)
// ============================================================================

const componentCache = new Map<string, React.LazyExoticComponent<any>>();
const configCache = new Map<string, any>();
const variantCache = new Map<string, VariantColors>();

// ============================================================================
// DYNAMIC LOADERS
// ============================================================================

/**
 * Lazy load a component from /components/<version>/<component>.tsx
 */
function getComponent(version: Version, componentName: string, exportName: string = 'default'): React.LazyExoticComponent<any> {
  const key = `${version}/${componentName}/${exportName}`;
  
  if (!componentCache.has(key)) {
    const LazyComponent = lazy(async () => {
      try {
        const module = await import(`../components/${version}/${componentName}.tsx`);
        // Handle named exports or default export
        const Component = exportName === 'default' 
          ? (module.default || module[toPascalCase(componentName)]) 
          : module[exportName];
          
        if (!Component) {
          throw new Error(`Export "${exportName}" not found in ${componentName}`);
        }
        
        return { default: Component };
      } catch (error) {
        console.error(`Failed to load component ${key}:`, error);
        return {
          default: () => <div className="text-destructive p-2 border border-destructive rounded bg-destructive/10">
            Failed to load {componentName} ({exportName})
          </div>
        };
      }
    });
    componentCache.set(key, LazyComponent);
  }
  
  return componentCache.get(key)!;
}

/**
 * Load config from /config/components/<version>/<component>.tsx
 */
async function loadConfig(version: Version, componentName: string): Promise<any> {
  const key = `${version}/${componentName}`;
  
  if (!configCache.has(key)) {
    try {
      const module = await import(`../config/components/${version}/${componentName}.tsx`);
      const config = module[`${toCamelCase(componentName)}Config`] || module.default || {};
      configCache.set(key, config);
    } catch {
      // Fallback to default version config
      try {
        const defaultModule = await import(`../config/components/default/${componentName}.tsx`);
        configCache.set(key, defaultModule[`${toCamelCase(componentName)}Config`] || defaultModule.default || {});
      } catch {
        configCache.set(key, {});
      }
    }
  }
  
  return configCache.get(key)!;
}

/**
 * Load variant colors from /config/variants/<variant>.json
 */
async function loadVariant(variant: Variant): Promise<VariantColors> {
  if (!variantCache.has(variant)) {
    try {
      const module = await import(`../config/variants/${variant}.json`);
      variantCache.set(variant, module.colors || module.default?.colors || {
        base: '#06b6d4',
        foreground: '#ffffff',
        border: '#0891b2',
        glow: '#22d3ee'
      });
    } catch {
      variantCache.set(variant, {
        base: '#06b6d4',
        foreground: '#ffffff',
        border: '#0891b2',
        glow: '#22d3ee'
      });
    }
  }
  
  return variantCache.get(variant)!;
}

// ============================================================================
// STYLE RESOLVER
// ============================================================================

/**
 * Resolve final styles by merging base + size + type(variant) + user style
 */
function resolveStyles(
  config: any,
  variantColors: VariantColors,
  type: string,
  size: Size,
  userStyle?: React.CSSProperties
): React.CSSProperties {
  const baseStyles = config.base || {};
  const sizeStyles = config.sizes?.[size] || {};
  const typeStyleFn = config.types?.[type] || config.types?.default;
  const typeStyles = typeStyleFn ? typeStyleFn(variantColors) : {};
  
  return {
    ...baseStyles,
    ...sizeStyles,
    ...typeStyles,
    ...userStyle,
  };
}

// ============================================================================
// UTILITIES
// ============================================================================

function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// ============================================================================
// DEFAULT LOADING COMPONENT
// ============================================================================

const DefaultLoading: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`animate-pulse bg-muted/20 rounded ${className || 'h-10 w-24'}`} />
);

// ============================================================================
// HANDLER FACTORY
// ============================================================================

/**
 * Creates a dynamic component handler
 * 
 * Usage:
 * ```tsx
 * const Button = createHandler({ componentName: 'button' });
 * 
 * // Then use:
 * <Button version="angular-corner" variant="primary" type="solid" size="md">
 *   Click Me
 * </Button>
 * ```
 */
export function createHandler<P extends object = {}>(config: HandlerConfig) {
  const {
    componentName,
    exportName = 'default',
    defaultVersion = 'default',
    defaultVariant = 'default',
    defaultType = 'default',
    defaultSize = 'md',
    loadingComponent: LoadingComponent = DefaultLoading,
  } = config;

  type HandlerPublicProps = P & HandlerParams & { className?: string; style?: React.CSSProperties; children?: React.ReactNode };
  type HandlerResolvedProps = HandlerPublicProps & {
    version: Version;
    variant: Variant;
    type: string;
    size: Size;
  };

  const Handler = forwardRef<any, HandlerPublicProps>(
    (props, ref) => {
      // Get global version from context
      const { version: globalVersion } = useVersion();
      
      const {
        version = globalVersion || defaultVersion,
        variant = defaultVariant,
        type = defaultType,
        size = defaultSize,
        effects,
        style,
        ...restProps
      } = props as HandlerResolvedProps;

      // Get lazy component
      const LazyComponent = useMemo(
        () => getComponent(version, componentName, exportName),
        [version]
      );
      const ResolvedComponent = LazyComponent as React.ComponentType<any>;

      // Load config and variant in parallel (handled by the component internally)
      return (
        <Suspense fallback={<LoadingComponent />}>
          <ResolvedComponent
            ref={ref}
            version={version}
            variant={variant}
            type={type}
            size={size}
            effects={effects}
            style={style}
            {...restProps}
          />
        </Suspense>
      );
    }
  );

  Handler.displayName = `${toPascalCase(componentName)}Handler`;
  
  return Handler;
}

function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// ============================================================================
// EXPORTS
// ============================================================================

export { getComponent, loadConfig, loadVariant, resolveStyles };
export type { VariantColors };
