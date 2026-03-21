'use client';

/**
 * Button Handler
 * 
 * Dynamically loads button component based on version, variant, and type.
 * NO hardcoded colors, styles, or variants
 */

import React, { lazy, Suspense, useMemo } from 'react';
import type { Version, Variant, Size, ButtonComponentType } from '../types/common';
import { getVariantColors } from '../core/handler-factory';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  version?: Version;
  variant?: Variant;
  type?: ButtonComponentType;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  /** @deprecated Use iconBefore instead */
  leftIcon?: React.ReactNode;
  /** @deprecated Use iconAfter instead */
  rightIcon?: React.ReactNode;
}

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
  loading = false,
  fullWidth = false,
  iconBefore,
  iconAfter,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  htmlType = 'button',
  ...props
}, ref) => {
  const shouldLog = process.env.NODE_ENV !== 'production';
  // Get variant colors dynamically - NO hardcoding
  const colors = useMemo(() => getVariantColors(variant), [variant]);

  if (shouldLog) {
    console.log('[UI:button]', { version, variant, type, size, loading });
  }
  
  // Get or create lazy component
  const LazyComponent = useMemo(() => {
    const cacheKey = `${version}/button`;
    if (!componentCache.has(cacheKey)) {
      componentCache.set(cacheKey, loadButtonComponent(version));
    }
    return componentCache.get(cacheKey)!;
  }, [version]);

  const resolvedIconBefore = iconBefore ?? leftIcon;
  const resolvedIconAfter = iconAfter ?? rightIcon;
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
      {resolvedIconBefore ? <span className="mr-2 inline-flex items-center">{resolvedIconBefore}</span> : null}
      {children}
      {loading ? <span className="ml-2 inline-flex animate-pulse items-center">...</span> : null}
      {!loading && resolvedIconAfter ? <span className="ml-2 inline-flex items-center">{resolvedIconAfter}</span> : null}
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
