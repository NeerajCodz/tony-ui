'use client';

import React, { lazy, Suspense, useMemo } from 'react';
import type { AnalogClockBaseProps, AnalogClockType } from '../components/_base/analog-clock';
import type { Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

export interface AnalogClockProps extends AnalogClockBaseProps {
  version?: Version;
  variant?: Variant;
}

const FallbackAnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps>(({ className = '', ...props }, ref) => (
  <svg
    ref={ref}
    className={`h-24 w-24 ${className}`}
    viewBox="0 0 100 100"
    role="img"
    aria-label="Analog clock"
    {...props}
  >
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
    <line x1="50" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="50" x2="72" y2="50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
));
FallbackAnalogClock.displayName = 'FallbackAnalogClock';

const componentCache = new Map<string, React.ComponentType<any>>();

const loadAnalogClockComponent = (version: Version): React.ComponentType<any> =>
  lazy(() =>
    loadVersionModule(version, 'analog-clock', true)
      .then((module: any) => ({
        default: module.AnalogClock || module.default || FallbackAnalogClock,
      }))
      .catch(() => ({ default: FallbackAnalogClock }))
  ) as React.ComponentType<any>;

const LoadingSkeleton: React.FC = () => (
  <div className="inline-flex h-24 w-24 animate-pulse rounded-full border border-muted/30 bg-muted/20" />
);

export const AnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps>(
  ({ version = 'default', variant = 'default', type = 'default', ...props }, ref) => {
    const colors = useMemo(() => getVariantColors(variant), [variant]);

    const LazyComponent = useMemo(() => {
      const cacheKey = `${version}/analog-clock`;
      if (!componentCache.has(cacheKey)) {
        componentCache.set(cacheKey, loadAnalogClockComponent(version));
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

AnalogClock.displayName = 'AnalogClock';

export default AnalogClock;

