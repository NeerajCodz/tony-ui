import * as React from 'react';

/**
 * InputOTP type variants
 */
export type InputOTPType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'unstyled';

/**
 * InputOTP sizes
 * | Size | Slot Size | Font  |
 * | sm   | 36px      | 16px  |
 * | md   | 44px      | 20px  |
 * | lg   | 52px      | 24px  |
 */
export type InputOTPSize = 'sm' | 'md' | 'lg';

// ============================================================================
// InputOTP Root
// ============================================================================

export interface InputOTPBaseProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Current OTP value
   */
  value?: string;
  
  /**
   * Callback when value changes
   */
  onChange?: (value: string) => void;
  
  /**
   * Total number of characters/digits
   * @default 6
   */
  maxLength?: number;
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: InputOTPType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: InputOTPSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the input is invalid
   */
  invalid?: boolean;
  
  /**
   * Input pattern (regex)
   * @default '[0-9]' for numeric-only
   */
  pattern?: string;
  
  /**
   * Input mode for mobile keyboards
   * @default 'numeric'
   */
  inputMode?: 'numeric' | 'text';
  
  /**
   * Callback when all slots are filled
   */
  onComplete?: (value: string) => void;
}

/**
 * InputOTPBase - One-time password / verification code input
 * 
 * Anatomy:
 * - InputOTP (root)
 *   - InputOTPGroup (groups slots together)
 *     - InputOTPSlot (individual character slot)
 *   - InputOTPSeparator (visual divider, e.g., "-")
 *   - InputOTPGroup
 *     - InputOTPSlot...
 * 
 * Behavior:
 * - Auto-advance: typing moves to next slot
 * - Backspace: clears current slot, moves to previous
 * - Paste: fills all slots from clipboard
 * - Complete callback: fires when all slots filled
 * 
 * Keyboard:
 * - ←/→ or Tab moves between slots
 * - Backspace clears and moves back
 * - Delete clears current
 * 
 * Accessibility:
 * - Screen reader announces as single input
 * - aria-label describes OTP input
 * - Uses hidden input for actual value
 */
export const InputOTPBase = React.forwardRef<HTMLDivElement, InputOTPBaseProps>(
  (
    {
      maxLength = 6,
      value,
      onChange,
      type = 'default',
      size = 'md',
      variant,
      disabled,
      invalid,
      pattern = '[0-9]',
      inputMode = 'numeric',
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      data-max-length={maxLength}
      data-otp-value={value ?? ''}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-disabled={disabled || undefined}
      data-invalid={invalid || undefined}
      data-pattern={pattern}
      data-input-mode={inputMode}
      {...props}
    />
  )
);
InputOTPBase.displayName = 'InputOTPBase';

// ============================================================================
// InputOTP Group
// ============================================================================

export interface InputOTPGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * InputOTPGroupBase - Groups slots visually
 * 
 * Use multiple groups with separator for "XXX-XXX" style.
 */
export const InputOTPGroupBase = React.forwardRef<HTMLDivElement, InputOTPGroupBaseProps>(
  (props, ref) => <div ref={ref} role="group" {...props} />
);
InputOTPGroupBase.displayName = 'InputOTPGroupBase';

// ============================================================================
// InputOTP Slot
// ============================================================================

export interface InputOTPSlotBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Index of this slot (0-based)
   */
  index: number;
  
  /**
   * The character displayed in this slot
   */
  char?: string;
  
  /**
   * Whether this slot has focus
   */
  hasFakeCaret?: boolean;
  
  /**
   * Whether this slot is active (cursor position)
   */
  isActive?: boolean;
}

/**
 * InputOTPSlotBase - Individual character slot
 * 
 * States:
 * - empty: shows placeholder or nothing
 * - filled: shows character
 * - active: has cursor/caret
 * - focus: focus ring
 * - invalid: destructive border
 */
export const InputOTPSlotBase = React.forwardRef<HTMLDivElement, InputOTPSlotBaseProps>(
  ({ index, char, hasFakeCaret, isActive, ...props }, ref) => (
    <div
      ref={ref}
      data-index={index}
      data-char={char}
      data-has-fake-caret={hasFakeCaret || undefined}
      data-active={isActive || undefined}
      {...props}
    />
  )
);
InputOTPSlotBase.displayName = 'InputOTPSlotBase';

// ============================================================================
// InputOTP Separator
// ============================================================================

export interface InputOTPSeparatorBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * InputOTPSeparatorBase - Visual divider between groups
 * 
 * Default shows "-" but can be customized.
 */
export const InputOTPSeparatorBase = React.forwardRef<HTMLDivElement, InputOTPSeparatorBaseProps>(
  ({ children = '-', ...props }, ref) => (
    <div ref={ref} role="separator" aria-hidden="true" {...props}>
      {children}
    </div>
  )
);
InputOTPSeparatorBase.displayName = 'InputOTPSeparatorBase';

// Bridge exports so version components consume OTP primitives via _base only
export { OTPInput,OTPInputContext } from 'input-otp';
