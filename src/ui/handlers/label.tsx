/**
 * Label Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type LabelVersion = Version;
export type LabelVariant = Variant;

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  version?: LabelVersion;
  variant?: LabelVariant;
  required?: boolean;
  error?: boolean;
}

// Fallback
const FallbackLabel = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className = '', required, error, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${error ? 'text-destructive' : ''} ${className}`}
    {...props}
  >
    {children}
    {required && <span className="text-destructive ml-1">*</span>}
  </LabelPrimitive.Root>
));
FallbackLabel.displayName = 'FallbackLabel';

// Main Label Component
export const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({
  version = 'angular-corner',
  variant = 'default',
  ...props
}, ref) => {
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);
  const LazyComponent = React.useMemo(
    () =>
      lazy(() =>
        loadVersionModule(version, 'label', true).catch(() => ({
          default: FallbackLabel,
        }))
      ),
    [version]
  );

  return (
    <Suspense fallback={null}>
      <LazyComponent ref={ref} variant={variant} colors={colors} {...props} />
    </Suspense>
  );
});
Label.displayName = 'Label';

export default Label;
