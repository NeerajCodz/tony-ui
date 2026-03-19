/**
 * Calendar Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { Version, Variant } from '../types/common';
import { DayPicker } from 'react-day-picker';

// Types
export type CalendarVersion = Version;
export type CalendarVariant = Variant;

export interface CalendarProps extends React.ComponentProps<typeof DayPicker> {
  version?: CalendarVersion;
  variant?: CalendarVariant;
}

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/calendar/calendar-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/calendar/calendar-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/calendar/calendar-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/calendar/calendar-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/calendar/calendar-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/calendar/calendar-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/calendar/calendar-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/calendar/calendar-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/calendar/calendar-matrix-grid.tsx')),
  'neon': lazy(() => import('../components/calendar/calendar-neon.tsx')),
};

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded w-[280px] h-[300px]" />
);

// Fallback
const FallbackCalendar: React.FC<CalendarProps> = ({ className = '', ...props }) => (
  <div className={`p-4 border border-dashed border-gray-600 rounded ${className}`}>
    <DayPicker {...props} />
  </div>
);

// Main Calendar Component
export const Calendar: React.FC<CalendarProps> = ({
  version = 'angular-corner',
  variant = 'default',
  ...props
}) => {
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return <FallbackCalendar variant={variant} {...props} />;
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent variant={variant} {...props} />
    </Suspense>
  );
};

Calendar.displayName = 'Calendar';

export default Calendar;
