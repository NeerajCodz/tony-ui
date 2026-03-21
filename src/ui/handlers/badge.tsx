/**
 * Badge Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type BadgeVersion = Version;
export type BadgeVariant = Variant;
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: BadgeVersion;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
}

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded-full h-6 w-16" />
);

// Fallback
const FallbackBadge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, className = '', variant = 'default', size = 'md', ...props }, ref) => (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}
      style={{
        borderColor: 'hsl(var(--border-base))',
        backgroundColor: 'hsl(var(--background-secondary) / 0.5)',
      }}
      {...props}
    >
      {children}
    </div>
  )
);
FallbackBadge.displayName = 'FallbackBadge';

// Main Badge Component
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({
  version = 'angular-corner',
  variant = 'default',
  size = 'md',
  children,
  ...props
}, ref) => {
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);
  const LazyComponent = React.useMemo(
    () =>
      lazy(() =>
        loadVersionModule(version, 'badge', true).catch(() => ({
          default: FallbackBadge,
        }))
      ),
    [version]
  );

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent ref={ref} variant={variant} colors={colors} size={size} {...props}>
        {children}
      </LazyComponent>
    </Suspense>
  );
});
Badge.displayName = 'Badge';

export default Badge;
