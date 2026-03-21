/**
 * ButtonGroup Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { Version, Variant, StyleComponentType } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type ButtonGroupVersion = Version;
export type ButtonGroupVariant = Variant;

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: ButtonGroupVersion;
  variant?: ButtonGroupVariant;
  type?: StyleComponentType;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
}

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
  type = 'default',
  orientation = 'horizontal',
  size = 'md',
  children,
  ...props
}, ref) => {
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);
  const LazyComponent = React.useMemo(
    () =>
      lazy(() =>
        loadVersionModule(version, 'button-group', true).catch(() => ({
          default: FallbackButtonGroup,
        }))
      ),
    [version]
  );

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent
        ref={ref}
        variant={variant}
        type={type}
        colors={colors}
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
