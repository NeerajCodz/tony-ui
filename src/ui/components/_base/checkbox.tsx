import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
/**
 * Checkbox type variants
 */
export type CheckboxType =
  | 'default'   // Border/fill
  | 'solid'     // Filled bg when checked
  | 'outline'   // Always bordered
  | 'tinted'    // Tinted background
  | 'soft'      // Soft muted background
  | 'neutral'   // Gray, no accent
  | 'unstyled'; // No styling

/**
 * Checkbox sizes
 * | Size | Box Size | Icon Size |
 * | sm   | 14px     | 10px      |
 * | md   | 18px     | 12px      |
 * | lg   | 22px     | 14px      |
 */
export type CheckboxSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Checkbox Root
// ============================================================================

export interface CheckboxBaseProps
  extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'type'> {
  /**
   * Visual structural type
   * @default 'default'
   */
  visualType?: CheckboxType;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: CheckboxSize;
  
  /**
   * Invalid/error state
   */
  invalid?: boolean;
}

/**
 * CheckboxBase - Binary toggle for boolean values or multi-select
 * 
 * States:
 * - unchecked: empty box, no indicator
 * - checked: box filled/bordered, checkmark icon visible
 * - indeterminate: box with dash icon (partial selection)
 * - hover: border brightens (all states)
 * - focus: focus ring (all states)
 * - active: brief scale(0.9) snap
 * - disabled: reduced opacity, no interaction
 * 
 * Animation:
 * - Check: checkmark SVG path draws in | --duration-fast
 * - Uncheck: icon fades out | --duration-fast
 * - Indeterminate: dash appears | --duration-fast
 * 
 * Keyboard: Space → toggle
 * 
 * Accessibility:
 * - role="checkbox" (native via Radix)
 * - aria-checked: "true" | "false" | "mixed" (indeterminate)
 * - aria-disabled if disabled
 * - aria-required if required
 * - MUST have accessible label (via <label>, aria-label, or aria-labelledby)
 */
export const CheckboxBase = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxBaseProps
>(
  (
    {
      visualType = 'default',
      variant,
      size = 'md',
      invalid = false,
      ...props
    },
    ref
  ) => (
    <CheckboxPrimitive.Root
      ref={ref}
      data-type={visualType}
      data-size={size}
      data-variant={variant}
      data-invalid={invalid ? '' : undefined}
      {...props}
    />
  )
);
CheckboxBase.displayName = 'CheckboxBase';

// ============================================================================
// Checkbox Indicator
// ============================================================================

export interface CheckboxIndicatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator> {}

/**
 * CheckboxIndicatorBase - Container for the checkmark/dash icon
 * 
 * Only renders when checked or indeterminate
 */
export const CheckboxIndicatorBase = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Indicator>,
  CheckboxIndicatorBaseProps
>((props, ref) => <CheckboxPrimitive.Indicator ref={ref} {...props} />);
CheckboxIndicatorBase.displayName = 'CheckboxIndicatorBase';

// Re-export for convenience
export { CheckboxIndicatorBase as CheckboxIndicator };

export { CheckboxPrimitive };
