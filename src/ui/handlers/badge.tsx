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

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/badge/badge-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/badge/badge-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/badge/badge-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/badge/badge-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/badge/badge-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/badge/badge-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/badge/badge-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/badge/badge-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/badge/badge-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('../components/badge/badge-neon-outline.tsx')),
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
