'use client';

import React, { lazy, Suspense, useMemo } from 'react';
import type { Version, Variant, StyleComponentType } from '../types/common';
import { getVariantColors } from '../core/handler-factory';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: Version;
  variant?: Variant;
  type?: StyleComponentType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const loadSpinnerComponent = (version: Version): React.ComponentType<any> => {
  return lazy(() =>
    import(`../components/${version}/spinner.tsx`)
      .catch(() => import(`../components/default/spinner.tsx`))
      .catch(() => ({
        default: React.forwardRef<HTMLDivElement, any>(({ className = '', ...props }, ref) => (
          <div ref={ref} className={className} {...props} />
        )),
      }))
  ) as React.ComponentType<any>;
};

const componentCache = new Map<string, React.ComponentType<any>>();

const LoadingSkeleton: React.FC = () => (
  <div className="inline-flex h-6 w-6 animate-pulse rounded-full bg-muted/20" />
);

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ version = 'default', variant = 'default', type = 'default', size = 'md', ...props }, ref) => {
    const colors = useMemo(() => getVariantColors(variant), [variant]);

    const LazyComponent = useMemo(() => {
      const cacheKey = `${version}/spinner`;
      if (!componentCache.has(cacheKey)) {
        componentCache.set(cacheKey, loadSpinnerComponent(version));
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
          colors={colors}
          {...props}
        />
      </Suspense>
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;
