'use client';

import React, { lazy, Suspense, useMemo } from 'react';
import type { DigitalClockBaseProps, DigitalClockType } from '../components/_base/digital-clock';
import type { Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

export interface DigitalClockProps extends DigitalClockBaseProps {
  version?: Version;
  variant?: Variant;
}

const FallbackDigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`inline-flex min-w-[10rem] items-center justify-center rounded border border-muted/30 px-3 py-2 text-sm ${className}`} {...props}>
    --:--:--
  </div>
));
FallbackDigitalClock.displayName = 'FallbackDigitalClock';

const componentCache = new Map<string, React.ComponentType<any>>();

const loadDigitalClockComponent = (version: Version): React.ComponentType<any> =>
  lazy(() =>
    loadVersionModule(version, 'digital-clock', true)
      .then((module: any) => ({
        default: module.DigitalClock || module.default || FallbackDigitalClock,
      }))
      .catch(() => ({ default: FallbackDigitalClock }))
  ) as React.ComponentType<any>;

const LoadingSkeleton: React.FC = () => (
  <div className="inline-flex h-12 w-40 animate-pulse rounded border border-muted/30 bg-muted/20" />
);

export const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ version = 'default', variant = 'default', type = 'default', ...props }, ref) => {
    const colors = useMemo(() => getVariantColors(variant), [variant]);

    const LazyComponent = useMemo(() => {
      const cacheKey = `${version}/digital-clock`;
      if (!componentCache.has(cacheKey)) {
        componentCache.set(cacheKey, loadDigitalClockComponent(version));
      }
      return componentCache.get(cacheKey)!;
    }, [version]);

    return (
      <Suspense fallback={<LoadingSkeleton />}>
        <LazyComponent ref={ref} version={version} variant={variant} type={type} colors={colors} {...props} />
      </Suspense>
    );
  }
);

DigitalClock.displayName = 'DigitalClock';

export default DigitalClock;

