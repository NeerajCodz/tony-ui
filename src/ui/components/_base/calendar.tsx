import * as React from 'react';
import type { Locale } from 'date-fns';

/**
 * Calendar type variants
 */
export type CalendarType =
  | 'default'
  | 'outline'
  | 'soft'
  | 'minimal'
  | 'unstyled';

/**
 * Calendar sizes
 * | Size | Day cell | Font  |
 * | sm   | 28px     | 12px  |
 * | md   | 36px     | 14px  |
 * | lg   | 44px     | 16px  |
 */
export type CalendarSize = 'sm' | 'md' | 'lg';

/**
 * Calendar selection modes
 */
export type CalendarMode = 'single' | 'multiple' | 'range';

// ============================================================================
// Calendar Root
// ============================================================================

export interface CalendarBaseProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /**
   * Selection mode
   * @default 'single'
   */
  mode?: CalendarMode;
  
  /**
   * Selected date(s)
   */
  selected?: Date | Date[] | { from?: Date; to?: Date };
  
  /**
   * Callback when selection changes
   */
  onSelect?: (date: Date | Date[] | { from?: Date; to?: Date } | undefined) => void;
  
  /**
   * Function to disable specific dates
   */
  disabled?: (date: Date) => boolean;
  
  /**
   * Locale for date formatting
   */
  locale?: Locale;
  
  /**
   * Currently displayed month
   */
  month?: Date;
  
  /**
   * Callback when displayed month changes
   */
  onMonthChange?: (month: Date) => void;
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: CalendarType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: CalendarSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Number of months to display
   * @default 1
   */
  numberOfMonths?: number;
  
  /**
   * First day of week (0 = Sunday, 1 = Monday)
   * @default 0
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * Show days from previous/next month
   * @default true
   */
  showOutsideDays?: boolean;
  
  /**
   * Show week numbers
   * @default false
   */
  showWeekNumber?: boolean;
  
  /**
   * Fixed number of weeks (6) for consistent height
   * @default false
   */
  fixedWeeks?: boolean;
  
  /**
   * Minimum selectable date
   */
  fromDate?: Date;
  
  /**
   * Maximum selectable date
   */
  toDate?: Date;
  
  /**
   * Starting year for year dropdown
   */
  fromYear?: number;
  
  /**
   * Ending year for year dropdown
   */
  toYear?: number;
  
  /**
   * Enable year/month dropdowns
   * @default false
   */
  captionLayout?: 'buttons' | 'dropdown' | 'dropdown-buttons';
}

/**
 * CalendarBase - Date selection calendar grid
 * 
 * Anatomy:
 * - Calendar (root)
 *   - CalendarMonths (container for multiple months)
 *     - CalendarMonth
 *       - CalendarCaption (month/year header)
 *         - CalendarCaptionLabel
 *         - CalendarNav (prev/next buttons)
 *       - CalendarTable
 *         - CalendarHead (weekday headers)
 *         - CalendarBody (day cells)
 *           - CalendarRow (week)
 *             - CalendarCell (day)
 *               - CalendarDay (clickable day button)
 * 
 * Selection modes:
 * - single: one date
 * - multiple: multiple dates
 * - range: start/end range
 * 
 * Keyboard:
 * - Arrow keys: navigate days
 * - Page Up/Down: prev/next month
 * - Home/End: first/last day of month
 * - Enter/Space: select date
 * 
 * Accessibility:
 * - role="grid" on table
 * - role="gridcell" on days
 * - aria-selected for selected days
 * - aria-disabled for disabled days
 */
export const CalendarBase = React.forwardRef<HTMLDivElement, CalendarBaseProps>(
  (
    {
      mode = 'single',
      selected,
      onSelect,
      disabled,
      locale,
      month,
      onMonthChange,
      type = 'default',
      size = 'md',
      variant,
      numberOfMonths = 1,
      weekStartsOn = 0,
      showOutsideDays = true,
      showWeekNumber = false,
      fixedWeeks = false,
      captionLayout = 'buttons',
      ...divProps
    },
    ref
  ) => (
    <div
      ref={ref}
      data-calendar-mode={mode}
      data-calendar-selected={selected ? 'true' : undefined}
      data-calendar-month={month?.toISOString()}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-months={numberOfMonths}
      data-show-outside={showOutsideDays}
      data-show-week-number={showWeekNumber || undefined}
      data-fixed-weeks={fixedWeeks || undefined}
      data-caption-layout={captionLayout}
      {...divProps}
    />
  )
);
CalendarBase.displayName = 'CalendarBase';

// ============================================================================
// Calendar Month Container
// ============================================================================

export interface CalendarMonthsBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CalendarMonthsBase - Container for month(s)
 */
export const CalendarMonthsBase = React.forwardRef<HTMLDivElement, CalendarMonthsBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
CalendarMonthsBase.displayName = 'CalendarMonthsBase';

// ============================================================================
// Calendar Month
// ============================================================================

export interface CalendarMonthBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CalendarMonthBase - Single month display
 */
export const CalendarMonthBase = React.forwardRef<HTMLDivElement, CalendarMonthBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
CalendarMonthBase.displayName = 'CalendarMonthBase';

// ============================================================================
// Calendar Caption
// ============================================================================

export interface CalendarCaptionBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CalendarCaptionBase - Month/year header
 */
export const CalendarCaptionBase = React.forwardRef<HTMLDivElement, CalendarCaptionBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
CalendarCaptionBase.displayName = 'CalendarCaptionBase';

// ============================================================================
// Calendar Nav
// ============================================================================

export interface CalendarNavBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CalendarNavBase - Container for navigation buttons
 */
export const CalendarNavBase = React.forwardRef<HTMLDivElement, CalendarNavBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
CalendarNavBase.displayName = 'CalendarNavBase';

// ============================================================================
// Calendar Nav Button
// ============================================================================

export interface CalendarNavButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'previous' | 'next';
}

/**
 * CalendarNavButtonBase - Previous/Next month button
 */
export const CalendarNavButtonBase = React.forwardRef<
  HTMLButtonElement,
  CalendarNavButtonBaseProps
>(({ direction, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label={direction === 'previous' ? 'Go to previous month' : 'Go to next month'}
    data-direction={direction}
    {...props}
  />
));
CalendarNavButtonBase.displayName = 'CalendarNavButtonBase';

// ============================================================================
// Calendar Day
// ============================================================================

export interface CalendarDayBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The date this cell represents
   */
  date?: Date;
  
  /**
   * Whether this day is selected
   */
  selected?: boolean;
  
  /**
   * Whether this day is today
   */
  today?: boolean;
  
  /**
   * Whether this day is outside the displayed month
   */
  outside?: boolean;
  
  /**
   * For range selection: is this the start of range
   */
  rangeStart?: boolean;
  
  /**
   * For range selection: is this the end of range
   */
  rangeEnd?: boolean;
  
  /**
   * For range selection: is this day within the range
   */
  rangeMiddle?: boolean;
}

/**
 * CalendarDayBase - Clickable day cell
 * 
 * States:
 * - default, hover, focus
 * - selected: accent background
 * - today: ring/indicator
 * - outside: muted
 * - disabled: reduced opacity, not clickable
 * - range states: start/middle/end styling
 */
export const CalendarDayBase = React.forwardRef<HTMLButtonElement, CalendarDayBaseProps>(
  (
    {
      date,
      selected,
      today,
      outside,
      rangeStart,
      rangeEnd,
      rangeMiddle,
      disabled,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      aria-selected={selected || undefined}
      aria-disabled={disabled || undefined}
      data-selected={selected || undefined}
      data-today={today || undefined}
      data-outside={outside || undefined}
      data-range-start={rangeStart || undefined}
      data-range-end={rangeEnd || undefined}
      data-range-middle={rangeMiddle || undefined}
      disabled={disabled}
      {...props}
    />
  )
);
CalendarDayBase.displayName = 'CalendarDayBase';
