'use client';

/**
 * Button Handler
 * 
 * Dynamically loads button component based on version, variant, and type.
 * NO hardcoded colors, styles, or variants
 */

import React, { lazy, Suspense, useMemo } from 'react';
import type { Version, Variant, Size } from '../types/common';
import type { ButtonProps, ButtonType } from '../types/components/button';
import { getVariantColors } from '../core/handler-factory';

// Dynamic component loader - NO hardcoded versions
const loadButtonComponent = (version: Version): React.ComponentType<any> => {
  return lazy(() =>
    import(`../components/${version}/button.tsx`)
      .catch(() => import(`../components/default/button.tsx`))
      .catch(() => ({
        default: React.forwardRef<HTMLButtonElement, any>(({ children, className = '', ...props }, ref) => (
          <button ref={ref} className={className} {...props}>{children}</button>
        ))
      }))
  ) as React.ComponentType<any>;
};

// Component cache for performance
const componentCache = new Map<string, React.ComponentType<any>>();

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
  effects,
  loading = false,
  fullWidth = false,
  iconBefore,
  iconAfter,
  className,
  children,
  disabled,
  htmlType = 'button',
  ...props
}, ref) => {
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

  const sizeClassName =
    size === 'sm'
      ? 'px-3 py-1.5 text-sm'
      : size === 'lg'
        ? 'px-8 py-3 text-base'
        : 'px-6 py-2 text-sm';
  const mergedClassName = fullWidth
    ? [className, sizeClassName, 'w-full'].filter(Boolean).join(' ')
    : [className, sizeClassName].filter(Boolean).join(' ');
  const content = (
    <>
      {iconBefore ? <span className="mr-2 inline-flex items-center">{iconBefore}</span> : null}
      {children}
      {loading ? <span className="ml-2 inline-flex animate-pulse items-center">...</span> : null}
      {!loading && iconAfter ? <span className="ml-2 inline-flex items-center">{iconAfter}</span> : null}
    </>
  );

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent 
        ref={ref} 
        className={mergedClassName}
        type={htmlType}
        uiType={type}
        htmlType={htmlType}
        colors={colors}
        effects={effects}
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </LazyComponent>
    </Suspense>
  );
});

Button.displayName = 'Button';

export default Button;
