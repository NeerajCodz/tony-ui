'use client';

import React, { lazy, Suspense, useMemo } from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { getVariantColors } from '../core/handler-factory';
import type { Variant, Version } from '../types/common';

export interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  version?: Version;
  variant?: Variant;
}

const loadAspectRatioComponent = (version: string) =>
  lazy(() =>
    import(`../components/${version}/aspect-ratio.tsx`)
      .catch(() => import(`../components/default/aspect-ratio.tsx`))
      .catch(() => ({ default: AspectRatioPrimitive.Root }))
  );

const componentCache = new Map<string, React.LazyExoticComponent<any>>();

const LoadingSkeleton: React.FC = () => <div className="h-full w-full animate-pulse rounded bg-muted/20" />;

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(({ version = 'default', variant = 'primary', children, ...props }, ref) => {
  const colors = useMemo(() => getVariantColors(variant), [variant]);

  const LazyComponent = useMemo(() => {
    const cacheKey = `${version}/aspect-ratio`;
    if (!componentCache.has(cacheKey)) {
      componentCache.set(cacheKey, loadAspectRatioComponent(version));
    }
    return componentCache.get(cacheKey)!;
  }, [version]);

  const ResolvedComponent = LazyComponent as React.ComponentType<any>;

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ResolvedComponent ref={ref} version={version} variant={variant} colors={colors} {...props}>
        {children}
      </ResolvedComponent>
    </Suspense>
  );
});

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
