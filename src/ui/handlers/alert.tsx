'use client';

/**
 * Alert Component Handler - Dynamic Loading
 * NO hardcoded colors, styles, or variants
 */

import React, { lazy, Suspense, useMemo, useState, useEffect } from 'react';
import type { Version, Variant, VariantColors } from '../types/common';
import { getVariantColors } from '../core/handler-factory';

// Types
export type AlertVersion = Version;
export type AlertVariant = Variant;

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: AlertVersion;
  variant?: AlertVariant;
  icon?: React.ReactNode;
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  version?: AlertVersion;
  variant?: AlertVariant;
}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  version?: AlertVersion;
  variant?: AlertVariant;
}

// Dynamic component loader - NO hardcoded versions
const loadAlertComponent = (version: Version) => {
  return lazy(() =>
    import(`../components/${version}/alert.tsx`)
      .catch(() => import(`../components/default/alert.tsx`))
      .catch(() => ({
        default: React.forwardRef<HTMLDivElement, any>(({ children, className = '' }, ref) => (
          <div ref={ref} role="alert" className={className}>{children}</div>
        ))
      }))
  );
};

// Dynamic config loader
const loadAlertConfig = async (version: Version) => {
  try {
    const module = await import(`../config/components/${version}/alert.tsx`);
    return module.alertConfig || module.default;
  } catch {
    try {
      const module = await import(`../config/components/default/alert.tsx`);
      return module.alertConfig || module.default;
    } catch {
      return null;
    }
  }
};

// Component cache for performance
const componentCache = new Map<string, React.LazyExoticComponent<any>>();

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-muted/20 rounded p-4 h-20" />
);

// Main Alert Component
const AlertBase = React.forwardRef<HTMLDivElement, AlertProps>(({
  version = 'default',
  variant = 'default',
  children,
  ...props
}, ref) => {
  const [config, setConfig] = useState<any>(null);
  
  // Dynamically load config
  useEffect(() => {
    loadAlertConfig(version).then(setConfig);
  }, [version]);
  
  // Get variant colors dynamically - NO hardcoding
  const colors = useMemo(() => getVariantColors(variant), [variant]);
  
  // Get or create lazy component
  const LazyComponent = useMemo(() => {
    const cacheKey = `${version}/alert`;
    if (!componentCache.has(cacheKey)) {
      componentCache.set(cacheKey, loadAlertComponent(version));
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
      >
        {children}
      </LazyComponent>
    </Suspense>
  );
});
AlertBase.displayName = 'Alert';

// Alert Title - styles loaded from config
const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(({
  className = '',
  children,
  ...props
}, ref) => (
  <h5
    ref={ref}
    className={className}
    {...props}
  >
    {children}
  </h5>
));
AlertTitle.displayName = 'AlertTitle';

// Alert Description - styles loaded from config
const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(({
  className = '',
  children,
  ...props
}, ref) => (
  <p
    ref={ref}
    className={className}
    {...props}
  >
    {children}
  </p>
));
AlertDescription.displayName = 'AlertDescription';

// Composite export
export const Alert = Object.assign(AlertBase, {
  Title: AlertTitle,
  Description: AlertDescription,
});

export { AlertTitle, AlertDescription };
export default Alert;
