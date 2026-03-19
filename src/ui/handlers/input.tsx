'use client';

/**
 * Input Component Handler - Dynamic Loading
 * NO hardcoded colors, styles, or variants
 */

import React, { lazy, Suspense, useMemo, useState, useEffect } from 'react';
import type { Version, Variant, VariantColors } from '../types/common';
import { getVariantColors } from '../core/handler-factory';

// Types
export type InputVersion = Version;
export type InputVariant = Variant;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  version?: InputVersion;
  variant?: InputVariant;
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// Dynamic component loader - NO hardcoded versions
const loadInputComponent = (version: Version) => {
  return lazy(() =>
    import(`../components/${version}/input.tsx`)
      .catch(() => import(`../components/default/input.tsx`))
      .catch(() => ({
        default: React.forwardRef<HTMLInputElement, any>(({ className = '', ...props }, ref) => (
          <input ref={ref} className={className} {...props} />
        ))
      }))
  );
};

// Dynamic config loader
const loadInputConfig = async (version: Version) => {
  try {
    const module = await import(`../config/components/${version}/input.tsx`);
    return module.inputConfig || module.default;
  } catch {
    try {
      const module = await import(`../config/components/default/input.tsx`);
      return module.inputConfig || module.default;
    } catch {
      return null;
    }
  }
};

// Component cache for performance
const componentCache = new Map<string, React.LazyExoticComponent<any>>();

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-muted/20 rounded h-10 w-full" />
);

// Main Input Component
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  version = 'default',
  variant = 'default',
  ...props
}, ref) => {
  const [config, setConfig] = useState<any>(null);
  
  // Dynamically load config
  useEffect(() => {
    loadInputConfig(version).then(setConfig);
  }, [version]);
  
  // Get variant colors dynamically - NO hardcoding
  const colors = useMemo(() => getVariantColors(variant), [variant]);
  
  // Get or create lazy component
  const LazyComponent = useMemo(() => {
    const cacheKey = `${version}/input`;
    if (!componentCache.has(cacheKey)) {
      componentCache.set(cacheKey, loadInputComponent(version));
    }
    return componentCache.get(cacheKey)!;
  }, [version]);

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent 
        ref={ref} 
        version={version}
        variant={variant}
        colors={colors}
        config={config}
        {...props} 
      />
    </Suspense>
  );
});
Input.displayName = 'Input';

export default Input;
