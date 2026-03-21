import * as React from 'react';

/**
 * Input type variants - subset of ButtonType that make sense for inputs
 */
export type InputType =
  | 'default'   // Standard input with background and border
  | 'outline'   // Transparent with visible border
  | 'ghost'     // Minimal, nearly invisible at rest
  | 'soft'      // Muted background tint
  | 'subtle'    // Very light background
  | 'flat'      // No bg/border/shadow
  | 'neutral'   // Pure gray, no accent
  | 'elevated'  // Shadow-based styling
  | 'unstyled'; // No styling

/**
 * Input sizes
 * | Size | Height | Padding H | Font  |
 * | sm   | 28px   | 10px      | 12px  |
 * | md   | 36px   | 12px      | 14px  |
 * | lg   | 44px   | 16px      | 16px  |
 */
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Visual structural type
   * @default 'default'
   */
  visualType?: InputType;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Size variant affecting height, padding, font size
   * @default 'md'
   */
  inputSize?: InputSize;
  
  /**
   * Invalid/error state - triggers error styling
   */
  invalid?: boolean;
}

/**
 * InputBase - Single-line text entry field
 * 
 * Renders as native <input> element.
 * 
 * States:
 * - default: base border, base bg
 * - hover: border brightens
 * - focus: border → focus-ring-color, focus ring visible
 * - filled: value present (no visual change unless floating label)
 * - disabled: reduced opacity, cursor: not-allowed
 * - readonly: no hover effect, cursor: default
 * - invalid: border → error color
 * 
 * Accessibility:
 * - Must have accessible label (via <label>, aria-label, or aria-labelledby)
 * - aria-invalid when invalid
 * - aria-describedby for helper/error text
 * - aria-required if required
 */
export const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      type = 'text',
      visualType = 'default',
      variant,
      inputSize = 'md',
      invalid = false,
      disabled,
      readOnly,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => (
    <input
      ref={ref}
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      aria-invalid={invalid || ariaInvalid}
      data-type={visualType}
      data-size={inputSize}
      data-variant={variant}
      data-invalid={invalid ? '' : undefined}
      {...props}
    />
  )
);
InputBase.displayName = 'InputBase';

export { InputBase as Input };
