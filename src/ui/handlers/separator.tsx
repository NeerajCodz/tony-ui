/**
 * Separator Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type SeparatorVersion = Version;
export type SeparatorVariant = Variant;

export interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  version?: SeparatorVersion;
  variant?: SeparatorVariant;
}

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
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);
  const LazyComponent = React.useMemo(
    () =>
      lazy(() =>
        loadVersionModule(version, 'separator', true).catch(() => ({
          default: FallbackSeparator,
        }))
      ),
    [version]
  );

  return (
    <Suspense fallback={<FallbackSeparator ref={ref} orientation={orientation} {...props} />}>
      <LazyComponent ref={ref} variant={variant} colors={colors} orientation={orientation} {...props} />
    </Suspense>
  );
});
Separator.displayName = 'Separator';

export default Separator;
