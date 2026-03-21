'use client';

import React, { lazy, Suspense } from 'react';
import type { Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: Version;
  variant?: Variant;
  icon?: React.ReactNode;
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  version?: Version;
  variant?: Variant;
}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  version?: Version;
  variant?: Variant;
}

const FallbackAlert = React.forwardRef<HTMLDivElement, AlertProps>(({ children, className = '', ...props }, ref) => (
  <div ref={ref} role="alert" className={className} {...props}>
    {children}
  </div>
));
FallbackAlert.displayName = 'FallbackAlert';

const LoadingSkeleton: React.FC = () => <div className="h-20 animate-pulse rounded bg-muted/20" />;

const AlertBase = React.forwardRef<HTMLDivElement, AlertProps>(({ version = 'default', variant = 'default', children, ...props }, ref) => {
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);
  const LazyComponent = React.useMemo(
    () =>
      lazy(() =>
        loadVersionModule(version, 'alert').catch(() => ({
          default: FallbackAlert,
        }))
      ),
    [version]
  );

  const ResolvedComponent = LazyComponent as React.ComponentType<any>;

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ResolvedComponent ref={ref} version={version} variant={variant} colors={colors} {...props}>
        {children}
      </ResolvedComponent>
    </Suspense>
  );
});
AlertBase.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(({ className = '', children, ...props }, ref) => (
  <h5 ref={ref} className={className} {...props}>
    {children}
  </h5>
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(({ className = '', children, ...props }, ref) => (
  <p ref={ref} className={className} {...props}>
    {children}
  </p>
));
AlertDescription.displayName = 'AlertDescription';

export const Alert = Object.assign(AlertBase, {
  Title: AlertTitle,
  Description: AlertDescription,
});

export { AlertTitle, AlertDescription };

export default Alert;
