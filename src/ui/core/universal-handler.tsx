/**
 * Client-Side Universal Component Handler
 * Dynamically loads and renders components with configs and variants
 * No hardcoding - everything loaded at runtime
 */

'use client';

import React, { lazy, Suspense, useMemo, useState, useEffect } from 'react';
import type { Version, Variant } from '../types/common';

interface UniversalHandlerProps extends Record<string, any> {
  component: string;
  version?: Version;
  variant?: Variant;
  type?: string;
  size?: string;
  children?: React.ReactNode;
}

// Fallback component while loading
const LoadingFallback = ({ component }: { component: string }) => (
  <div 
    className="animate-pulse bg-muted rounded"
    style={{ height: '40px', width: '100%' }}
    data-component={component}
  />
);

// Error fallback
const ErrorFallback = ({ component, version, error }: any) => (
  <div
    className="text-red-500 text-sm p-2 border border-red-300 bg-red-50 rounded"
    role="alert"
  >
    Failed to load {component} ({version}): {error?.message}
  </div>
);

/**
 * Dynamic Component Loader Hook
 */
function useDynamicComponent(
  component: string,
  version: Version,
  variant: Variant,
  type?: string,
  size: string = 'md'
) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  const [config, setConfig] = useState<any>({});
  const [variantData, setVariantData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  // Define all available versions
  const AVAILABLE_VERSIONS = [
    'angular-corner', 'border', 'circuit-board', 'compact', 'data-panel',
    'default', 'energy-shield', 'ghost', 'glass-morphism', 'holo-frame',
    'large', 'matrix-grid', 'neon-outline', 'padding', 'quantum-gate',
    'raised', 'tactical-hud', 'tech-panel', 'terminal-window',
  ];

  const validVersion = AVAILABLE_VERSIONS.includes(version) ? version : 'default';

  useEffect(() => {
    let mounted = true;

    const loadDynamically = async () => {
      try {
        // Load component
        const ComponentModule = await import(
          `../components/${validVersion}/${component}.tsx`
        );
        const LoadedComponent = ComponentModule.default || ComponentModule[component];

        if (!LoadedComponent) {
          throw new Error(`No default export in ${validVersion}/${component}.tsx`);
        }

        if (mounted) setComponent(() => LoadedComponent);

        // Load config
        try {
          const ConfigModule = await import(
            `../config/components/${validVersion}/${component}.tsx`
          );
          const loadedConfig = ConfigModule.config || ConfigModule.default || {};
          if (mounted) setConfig(loadedConfig);
        } catch {
          // Config is optional
        }

        // Load variant
        try {
          const VariantModule = await import(
            `../config/variants/${variant}.json`
          );
          const loadedVariant = VariantModule.default || VariantModule;
          if (mounted) setVariantData(loadedVariant);
        } catch {
          // Fallback to primary
          try {
            const PrimaryModule = await import(`../config/variants/primary.json`);
            const primary = PrimaryModule.default || PrimaryModule;
            if (mounted) setVariantData(primary);
          } catch {
            if (mounted) setVariantData({
              name: 'default',
              colors: { base: '#64748b', foreground: '#ffffff', border: '#475569', glow: '#94a3b8' },
            });
          }
        }
      } catch (err) {
        if (mounted) setError(err instanceof Error ? err : new Error(String(err)));
      }
    };

    loadDynamically();

    return () => {
      mounted = false;
    };
  }, [component, validVersion, variant]);

  // Compute merged styles
  const computedStyle = useMemo(() => {
    if (!variantData) return {};

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
  }, [config, variantData, size, type]);

  return { Component, computedStyle, error, version: validVersion };
}

/**
 * Universal Handler - Main component
 */
export const UniversalHandler = React.forwardRef<any, UniversalHandlerProps>(
  function UniversalHandlerImpl(
    {
      component,
      version = 'default',
      variant = 'primary',
      type,
      size = 'md',
      children,
      ...props
    },
    ref
  ) {
    const { Component, computedStyle, error, version: validVersion } = useDynamicComponent(
      component,
      version as Version,
      variant as Variant,
      type,
      size
    );

    if (error) {
      return <ErrorFallback component={component} version={validVersion} error={error} />;
    }

    if (!Component) {
      return <LoadingFallback component={component} />;
    }

    return (
      <Component
        ref={ref}
        version={validVersion}
        variant={variant}
        type={type}
        size={size}
        style={computedStyle}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

UniversalHandler.displayName = 'UniversalHandler';

export default UniversalHandler;
