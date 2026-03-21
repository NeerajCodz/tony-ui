'use client';

import React, { lazy, Suspense } from 'react';
import type { Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: Version;
  variant?: Variant;
  animated?: boolean;
}

const FallbackSkeleton: React.FC<SkeletonProps> = ({ className = '', animated = true, ...props }) => (
  <div className={`${animated ? 'animate-pulse' : ''} rounded-md bg-muted ${className}`} {...props} />
);

export const Skeleton: React.FC<SkeletonProps> = ({ version = 'default', variant = 'default', ...props }) => {
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);
  const LazyComponent = React.useMemo(
    () =>
      lazy(() =>
        loadVersionModule(version, 'skeleton', true)
          .then((module) => ({
            default: module.default ?? module.Skeleton ?? FallbackSkeleton,
          }))
          .catch(() => ({ default: FallbackSkeleton }))
      ),
    [version]
  );

  const ResolvedComponent = LazyComponent as React.ComponentType<any>;

  return (
    <Suspense fallback={<FallbackSkeleton {...props} />}>
      <ResolvedComponent variant={variant} colors={colors} {...props} />
    </Suspense>
  );
};

Skeleton.displayName = 'Skeleton';

export default Skeleton;
