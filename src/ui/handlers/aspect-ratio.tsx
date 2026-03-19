'use client';

/**
 * AspectRatio Handler - Dynamic Loading
 */

import React, { lazy, Suspense, useMemo } from 'react';
import type { AspectRatioProps, AspectRatioVersion } from '../types/components/data-display';
import { getVariantColors } from '../core/handler-factory';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

// Dynamic component loader
const loadAspectRatioComponent = (version: string) => {
  return lazy(() =>
    import(`../components/${version}/aspect-ratio.tsx`)
      .catch(() => import(`../components/default/aspect-ratio.tsx`))
      .catch(() => ({
        default: AspectRatioPrimitive.Root
      }))
  );
};

// Component cache
const componentCache = new Map<string, React.LazyExoticComponent<any>>();

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-muted/20 w-full h-full rounded" />
);

const AspectRatio = React.forwardRef<HTMLDivElement, any>(({
  version = 'default',
  variant = 'primary',
  children,
  ...props
}, ref) => {
  
  // Get variant colors dynamically
  const colors = useMemo(() => getVariantColors(variant), [variant]);
  
  // Get or create lazy component
  const LazyComponent = useMemo(() => {
    const v = version as string;
    const cacheKey = `${v}/aspect-ratio`;
    if (!componentCache.has(cacheKey)) {
      componentCache.set(cacheKey, loadAspectRatioComponent(v));
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
        {...props}
      >
        {children}
      </LazyComponent>
    </Suspense>
  );
});

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
