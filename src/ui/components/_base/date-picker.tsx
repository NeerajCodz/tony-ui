import * as React from 'react';

/**
 * DatePicker type variants
 */
export type DatePickerType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'unstyled';

/**
 * DatePicker sizes
 */
export type DatePickerSize = 'sm' | 'md' | 'lg';

/**
 * DatePicker selection modes
 */
export type DatePickerMode = 'single' | 'multiple' | 'range';

// ============================================================================
// DatePicker Root
// ============================================================================

export interface DatePickerBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Selected date (single mode)
   */
  date?: Date;
  
  /**
   * Selected dates (multiple mode)
   */
  dates?: Date[];
  
  /**
   * Date range (range mode)
   */
  dateRange?: { from?: Date; to?: Date };
  
  /**
   * Callback when date changes (single mode)
   */
  onDateChange?: (date: Date | undefined) => void;
  
  /**
   * Callback when dates change (multiple mode)
   */
  onDatesChange?: (dates: Date[]) => void;
  
  /**
   * Callback when range changes (range mode)
   */
  onDateRangeChange?: (range: { from?: Date; to?: Date }) => void;
  
  /**
   * Selection mode
   * @default 'single'
   */
  mode?: DatePickerMode;
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: DatePickerType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: DatePickerSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Function to disable specific dates
   */
  disabled?: (date: Date) => boolean;
  
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  
  /**
   * First day of week (0 = Sunday, 1 = Monday, etc.)
   * @default 0
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * Date format for display
   * @default 'PP' (e.g., "Apr 29, 2024")
   */
  format?: string;
  
  /**
   * Placeholder text when no date selected
   */
  placeholder?: string;
  
  /**
   * Whether the picker is disabled
   */
  isDisabled?: boolean;
  
  /**
   * Whether the picker is required
   */
  required?: boolean;
  
  /**
   * Whether the picker is invalid
   */
  invalid?: boolean;
  
  /**
   * Number of months to display
   * @default 1
   */
  numberOfMonths?: number;
  
  /**
   * Whether to show outside days (days from prev/next month)
   * @default true
   */
  showOutsideDays?: boolean;
}

/**
 * DatePickerBase - Date selection with calendar popup
 * 
 * Anatomy:
 * - DatePicker (root)
 *   - DatePickerTrigger (input/button)
 *   - DatePickerContent (popover with calendar)
 *     - Calendar component
 *     - Optional presets
 * 
 * Selection modes:
 * - single: select one date
 * - multiple: select multiple dates
 * - range: select start and end date
 * 
 * Keyboard:
 * - Tab to trigger, Enter/Space to open
 * - Arrow keys to navigate calendar
 * - Enter to select date
 * - Escape to close
 * 
 * Accessibility:
 * - Uses Calendar component accessibility
 * - Trigger has aria-haspopup and aria-expanded
 */
export const DatePickerBase = React.forwardRef<HTMLDivElement, DatePickerBaseProps>(
  (
    {
      mode = 'single',
      type = 'default',
      size = 'md',
      variant,
      isDisabled,
      invalid,
      numberOfMonths = 1,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      data-mode={mode}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-disabled={isDisabled || undefined}
      data-invalid={invalid || undefined}
      data-months={numberOfMonths}
      {...props}
    />
  )
);
DatePickerBase.displayName = 'DatePickerBase';

// ============================================================================
// DatePicker Trigger
// ============================================================================

export interface DatePickerTriggerBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * DatePickerTriggerBase - Button/input that opens the calendar
 */
export const DatePickerTriggerBase = React.forwardRef<
  HTMLButtonElement,
  DatePickerTriggerBaseProps
>((props, ref) => (
  <button ref={ref} type="button" aria-haspopup="dialog" {...props} />
));
DatePickerTriggerBase.displayName = 'DatePickerTriggerBase';

// ============================================================================
// DatePicker Content
// ============================================================================

export interface DatePickerContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DatePickerContentBase - Popover content containing calendar
 */
export const DatePickerContentBase = React.forwardRef<
  HTMLDivElement,
  DatePickerContentBaseProps
>((props, ref) => <div ref={ref} role="dialog" {...props} />);
DatePickerContentBase.displayName = 'DatePickerContentBase';

// ============================================================================
// DatePicker Presets
// ============================================================================

export interface DatePickerPresetsBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DatePickerPresetsBase - Quick selection presets (Today, Last 7 days, etc.)
 */
export const DatePickerPresetsBase = React.forwardRef<
  HTMLDivElement,
  DatePickerPresetsBaseProps
>((props, ref) => <div ref={ref} {...props} />);
DatePickerPresetsBase.displayName = 'DatePickerPresetsBase';
