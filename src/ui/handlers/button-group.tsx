/**
 * ButtonGroup Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { Version, Variant } from '../types/common';

// Types
export type ButtonGroupVersion = Version;
export type ButtonGroupVariant = Variant;

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: ButtonGroupVersion;
  variant?: ButtonGroupVariant;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
}

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/button-group/button-group-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/button-group/button-group-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/button-group/button-group-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/button-group/button-group-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/button-group/button-group-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/button-group/button-group-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/button-group/button-group-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/button-group/button-group-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/button-group/button-group-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('../components/button-group/button-group-neon-outline.tsx')),
};

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded h-10 w-32" />
);

// Fallback
const FallbackButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className = '', orientation = 'horizontal', ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      className={`inline-flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
FallbackButtonGroup.displayName = 'FallbackButtonGroup';

// Main Component
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({
  version = 'angular-corner',
  variant = 'default',
  orientation = 'horizontal',
  size = 'md',
  children,
  ...props
}, ref) => {
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return (
      <FallbackButtonGroup ref={ref} orientation={orientation} {...props}>
        {children}
      </FallbackButtonGroup>
    );
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent
        ref={ref}
        variant={variant}
        orientation={orientation}
        size={size}
        {...props}
      >
        {children}
      </LazyComponent>
    </Suspense>
  );
});
ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
