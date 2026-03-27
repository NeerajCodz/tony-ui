import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';
/**
 * Progress sizes
 * | Size | Track Height |
 * | sm   | 2px          |
 * | md   | 6px          |
 * | lg   | 10px         |
 * | xl   | 16px         |
 */
export type ProgressSize = 'sm' | 'md' | 'lg' | 'xl';

// ============================================================================
// Progress Root
// ============================================================================

export interface ProgressBaseProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  /**
   * Size variant (track height)
   * @default 'md'
   */
  size?: ProgressSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Indeterminate state (no value, looping animation)
   */
  indeterminate?: boolean;
}

/**
 * ProgressBase - Visual progress indicator
 * 
 * States:
 * - determinate: fill = value/max %
 * - indeterminate: looping animation (no value)
 * - complete: optional color change
 * 
 * Animation:
 * - Value change: smooth | --duration-slow | --ease-decelerate
 * - Indeterminate: loop | 1.5s | linear
 * 
 * Accessibility:
 * - role="progressbar" (via Radix)
 * - aria-valuemin/max/now
 * - aria-valuetext
 * - Indeterminate: omit aria-valuenow
 */
export const ProgressBase = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressBaseProps
>(({ size = 'md', variant, indeterminate = false, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    data-size={size}
    data-variant={variant}
    data-indeterminate={indeterminate ? '' : undefined}
    {...props}
  />
));
ProgressBase.displayName = 'ProgressBase';

// ============================================================================
// Progress Indicator
// ============================================================================

export interface ProgressIndicatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator> {}

/**
 * ProgressIndicatorBase - The filled portion (range)
 * 
 * Width/transform controlled by value prop on parent.
 */
export const ProgressIndicatorBase = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Indicator>,
  ProgressIndicatorBaseProps
>((props, ref) => <ProgressPrimitive.Indicator ref={ref} {...props} />);
ProgressIndicatorBase.displayName = 'ProgressIndicatorBase';

// Alias for clarity
export { ProgressIndicatorBase as ProgressFillBase };

export { ProgressPrimitive };
