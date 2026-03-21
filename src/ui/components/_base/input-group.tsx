import * as React from 'react';

/**
 * InputGroup type variants
 */
export type InputGroupType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'unstyled';

/**
 * InputGroup sizes
 */
export type InputGroupSize = 'sm' | 'md' | 'lg';

// ============================================================================
// InputGroup Root
// ============================================================================

export interface InputGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: InputGroupType;
  
  /**
   * Size variant (applies to all children)
   * @default 'md'
   */
  size?: InputGroupSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Whether the group is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the group is invalid
   */
  invalid?: boolean;
}

/**
 * InputGroupBase - Input with addons and elements
 * 
 * Anatomy:
 * - InputGroup (container)
 *   - InputLeftAddon (attached text/element on left)
 *   - InputLeftElement (icon inside input, left)
 *   - [Input] (the actual input - slotted)
 *   - InputRightElement (icon inside input, right)
 *   - InputRightAddon (attached text/element on right)
 * 
 * Addons vs Elements:
 * - Addons: Attached outside the input (e.g., "https://")
 * - Elements: Positioned inside the input (e.g., search icon)
 * 
 * Behavior:
 * - Input width adjusts based on addons/elements
 * - Size/disabled/invalid propagate to children
 */
export const InputGroupBase = React.forwardRef<HTMLDivElement, InputGroupBaseProps>(
  (
    {
      type = 'default',
      size = 'md',
      variant,
      disabled,
      invalid,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-disabled={disabled || undefined}
      data-invalid={invalid || undefined}
      {...props}
    />
  )
);
InputGroupBase.displayName = 'InputGroupBase';

// ============================================================================
// InputGroup Left Addon
// ============================================================================

export interface InputLeftAddonBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * InputLeftAddonBase - Addon attached to left of input
 * 
 * For static text like "https://", "+1", currency symbols.
 * Visually attached to input (shared border).
 */
export const InputLeftAddonBase = React.forwardRef<HTMLDivElement, InputLeftAddonBaseProps>(
  (props, ref) => <div ref={ref} data-position="left" data-addon {...props} />
);
InputLeftAddonBase.displayName = 'InputLeftAddonBase';

// ============================================================================
// InputGroup Right Addon
// ============================================================================

export interface InputRightAddonBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * InputRightAddonBase - Addon attached to right of input
 * 
 * For static text like ".com", currency, units.
 */
export const InputRightAddonBase = React.forwardRef<HTMLDivElement, InputRightAddonBaseProps>(
  (props, ref) => <div ref={ref} data-position="right" data-addon {...props} />
);
InputRightAddonBase.displayName = 'InputRightAddonBase';

// ============================================================================
// InputGroup Left Element
// ============================================================================

export interface InputLeftElementBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the element is interactive (clickable)
   * @default false
   */
  interactive?: boolean;
}

/**
 * InputLeftElementBase - Element inside input, left side
 * 
 * For icons, spinners, etc. positioned inside the input.
 * Input gets left padding to make room.
 */
export const InputLeftElementBase = React.forwardRef<HTMLDivElement, InputLeftElementBaseProps>(
  ({ interactive, ...props }, ref) => (
    <div
      ref={ref}
      data-position="left"
      data-element
      data-interactive={interactive || undefined}
      {...props}
    />
  )
);
InputLeftElementBase.displayName = 'InputLeftElementBase';

// ============================================================================
// InputGroup Right Element
// ============================================================================

export interface InputRightElementBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the element is interactive (clickable)
   * @default false
   */
  interactive?: boolean;
}

/**
 * InputRightElementBase - Element inside input, right side
 * 
 * For icons, clear buttons, password toggle, etc.
 * Input gets right padding to make room.
 */
export const InputRightElementBase = React.forwardRef<HTMLDivElement, InputRightElementBaseProps>(
  ({ interactive, ...props }, ref) => (
    <div
      ref={ref}
      data-position="right"
      data-element
      data-interactive={interactive || undefined}
      {...props}
    />
  )
);
InputRightElementBase.displayName = 'InputRightElementBase';
