/**
 * Badge Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { Version, Variant } from '../types/common';

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

// Dynamic imports - Version-First Architecture
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/angular-corner/badge.tsx')),
  'holo-frame': lazy(() => import('../components/holo-frame/badge.tsx')),
  'data-panel': lazy(() => import('../components/data-panel/badge.tsx')),
  'circuit-board': lazy(() => import('../components/circuit-board/badge.tsx')),
  'quantum-gate': lazy(() => import('../components/quantum-gate/badge.tsx')),
  'tactical-hud': lazy(() => import('../components/tactical-hud/badge.tsx')),
  'energy-shield': lazy(() => import('../components/energy-shield/badge.tsx')),
  'terminal-window': lazy(() => import('../components/terminal-window/badge.tsx')),
  'matrix-grid': lazy(() => import('../components/matrix-grid/badge.tsx')),
  'neon-outline': lazy(() => import('../components/neon-outline/badge.tsx')),
  'glass-morphism': lazy(() => import('../components/glass-morphism/badge.tsx')),
  'tech-panel': lazy(() => import('../components/tech-panel/badge.tsx')),
  'default': lazy(() => import('../components/default/badge.tsx')),
  'border': lazy(() => import('../components/border/badge.tsx')),
  'compact': lazy(() => import('../components/compact/badge.tsx')),
  'ghost': lazy(() => import('../components/ghost/badge.tsx')),
  'large': lazy(() => import('../components/large/badge.tsx')),
  'padding': lazy(() => import('../components/padding/badge.tsx')),
  'raised': lazy(() => import('../components/raised/badge.tsx')),
};

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
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return <FallbackBadge ref={ref} variant={variant} size={size} {...props}>{children}</FallbackBadge>;
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent ref={ref} variant={variant} size={size} {...props}>
        {children}
      </LazyComponent>
    </Suspense>
  );
});
Badge.displayName = 'Badge';

export default Badge;
