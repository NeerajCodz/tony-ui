'use client';

import React, { lazy, Suspense } from 'react';
import type { StyleComponentType, Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: Version;
  variant?: Variant;
  type?: StyleComponentType;
}

const LoadingSkeleton: React.FC = () => <div className="h-[300px] w-[280px] animate-pulse rounded bg-gray-800/20" />;

const FallbackCalendar = React.forwardRef<HTMLDivElement, CalendarProps>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`rounded border border-dashed border-gray-600 p-4 ${className}`} {...props} />
));
FallbackCalendar.displayName = 'FallbackCalendar';

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(({ version = 'default', variant = 'default', type = 'default', ...props }, ref) => {
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);
  const LazyComponent = React.useMemo(
    () =>
      lazy(() =>
        loadVersionModule(version, 'calendar').catch(() => ({
          default: FallbackCalendar,
        }))
      ),
    [version]
  );

  const ResolvedComponent = LazyComponent as React.ComponentType<any>;

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ResolvedComponent ref={ref} version={version} variant={variant} type={type} colors={colors} {...props} />
    </Suspense>
  );
});

Calendar.displayName = 'Calendar';

export default Calendar;
