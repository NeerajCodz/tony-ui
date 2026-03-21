import * as React from 'react';

/**
 * ButtonGroup type variants
 */
export type ButtonGroupType =
  | 'default'
  | 'outline'
  | 'solid'
  | 'ghost'
  | 'soft'
  | 'unstyled';

/**
 * ButtonGroup sizes
 */
export type ButtonGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// ============================================================================
// ButtonGroup
// ============================================================================

export interface ButtonGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Layout orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Visual structural type (applies to all buttons)
   * @default 'default'
   */
  type?: ButtonGroupType;
  
  /**
   * Size variant (applies to all buttons)
   * @default 'md'
   */
  size?: ButtonGroupSize;
  
  /**
   * Semantic color variant (applies to all buttons)
   */
  variant?: string;
  
  /**
   * Whether buttons are visually attached
   * @default true
   */
  attached?: boolean;
  
  /**
   * Whether the group is disabled
   */
  disabled?: boolean;
}

/**
 * ButtonGroupBase - Group of related buttons
 * 
 * Use for related actions like:
 * - Text alignment (left | center | right | justify)
 * - View modes (list | grid | cards)
 * - Split buttons (action + dropdown)
 * 
 * Behavior:
 * - Buttons visually connected (no gap, shared borders)
 * - First/last buttons have rounded corners
 * - Middle buttons have no rounded corners
 * - Props like type/size/variant apply to all children
 * 
 * Accessibility:
 * - role="group"
 * - Use aria-label to describe the group
 * 
 * Note: For toggle behavior (select one/multiple), use ToggleGroup instead.
 */
export const ButtonGroupBase = React.forwardRef<HTMLDivElement, ButtonGroupBaseProps>(
  (
    {
      orientation = 'horizontal',
      type = 'default',
      size = 'md',
      variant,
      attached = true,
      disabled,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="group"
      data-orientation={orientation}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-attached={attached}
      data-disabled={disabled || undefined}
      aria-disabled={disabled || undefined}
      {...props}
    />
  )
);
ButtonGroupBase.displayName = 'ButtonGroupBase';
