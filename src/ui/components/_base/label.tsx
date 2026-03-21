import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

/**
 * Label sizes
 */
export type LabelSize = 'sm' | 'md' | 'lg';

export interface LabelBaseProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  /**
   * Size variant
   * @default 'md'
   */
  size?: LabelSize;
  
  /**
   * Whether the associated field is required
   * Shows indicator (*)
   */
  required?: boolean;
  
  /**
   * Whether the associated field is disabled
   * Applies reduced opacity
   */
  disabled?: boolean;
  
  /**
   * Whether the associated field is invalid
   * Optionally shifts to error color
   */
  invalid?: boolean;
}

/**
 * LabelBase - Text label associated with a form control
 * 
 * States:
 * - When associated control is disabled: --disabled-opacity
 * - When associated control is invalid: error color (optional)
 * 
 * Usage:
 * <Label htmlFor="input-id">Label text</Label>
 * <Input id="input-id" />
 */
export const LabelBase = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelBaseProps
>(({ size = 'md', required = false, disabled = false, invalid = false, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-size={size}
    data-required={required ? '' : undefined}
    data-disabled={disabled ? '' : undefined}
    data-invalid={invalid ? '' : undefined}
    {...props}
  />
));
LabelBase.displayName = 'LabelBase';
