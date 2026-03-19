/**
 * Separator Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import type { Version, Variant } from '../types/common';

// Types
export type SeparatorVersion = Version;
export type SeparatorVariant = Variant;

export interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  version?: SeparatorVersion;
  variant?: SeparatorVariant;
}

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/separator/separator-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/separator/separator-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/separator/separator-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/separator/separator-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/separator/separator-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/separator/separator-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/separator/separator-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/separator/separator-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/separator/separator-matrix-grid.tsx')),
  'neon': lazy(() => import('../components/separator/separator-neon.tsx')),
};

// Fallback
const FallbackSeparator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className = '', orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={`shrink-0 bg-border ${orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} ${className}`}
    {...props}
  />
));
FallbackSeparator.displayName = 'FallbackSeparator';

// Main Separator Component
export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({
  version = 'angular-corner',
  variant = 'default',
  orientation = 'horizontal',
  ...props
}, ref) => {
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return <FallbackSeparator ref={ref} orientation={orientation} {...props} />;
  }

  return (
    <Suspense fallback={<FallbackSeparator ref={ref} orientation={orientation} {...props} />}>
      <LazyComponent ref={ref} variant={variant} orientation={orientation} {...props} />
    </Suspense>
  );
});
Separator.displayName = 'Separator';

export default Separator;
