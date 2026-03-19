'use client';

/**
 * Button Handler
 * 
 * Dynamically loads button component based on version, variant, and type.
 * NO hardcoded colors, styles, or variants
 */

import React, { lazy, Suspense, useMemo, useState, useEffect } from 'react';
import type { Version, Variant, Size, ButtonComponentType, VariantColors } from '../types/common';
import { getVariantColors } from '../core/handler-factory';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  version?: Version;
  variant?: Variant;
  type?: ButtonComponentType;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Dynamic component loader - NO hardcoded versions
const loadButtonComponent = (version: Version) => {
  return lazy(() =>
    import(`../components/${version}/button.tsx`)
      .catch(() => import(`../components/default/button.tsx`))
      .catch(() => ({
        default: React.forwardRef<HTMLButtonElement, any>(({ children, className = '', ...props }, ref) => (
          <button ref={ref} className={className} {...props}>{children}</button>
        ))
      }))
  );
};

// Dynamic config loader
const loadButtonConfig = async (version: Version) => {
  try {
    const module = await import(`../config/components/${version}/button.tsx`);
    return module.buttonConfig || module.default;
  } catch {
    try {
      const module = await import(`../config/components/default/button.tsx`);
      return module.buttonConfig || module.default;
    } catch {
      return null;
    }
  }
};

// Component cache for performance
const componentCache = new Map<string, React.LazyExoticComponent<any>>();

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-muted/20 rounded h-10 w-20" />
);

// Main Button Component
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  version = 'default',
  variant = 'default',
  type = 'default',
  size = 'md',
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}, ref) => {
  const [config, setConfig] = useState<any>(null);
  
  // Dynamically load config
  useEffect(() => {
    loadButtonConfig(version).then(setConfig);
  }, [version]);
  
  // Get variant colors dynamically - NO hardcoding
  const colors = useMemo(() => getVariantColors(variant), [variant]);
  
  // Get or create lazy component
  const LazyComponent = useMemo(() => {
    const cacheKey = `${version}/button`;
    if (!componentCache.has(cacheKey)) {
      componentCache.set(cacheKey, loadButtonComponent(version));
    }
    return componentCache.get(cacheKey)!;
  }, [version]);

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent 
        ref={ref} 
        version={version}
        variant={variant}
        type={type}
        size={size}
        loading={loading}
        fullWidth={fullWidth}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        colors={colors}
        config={config}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </LazyComponent>
    </Suspense>
  );
});

Button.displayName = 'Button';

export default Button;
