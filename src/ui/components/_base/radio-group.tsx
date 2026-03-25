import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
/**
 * RadioGroup type variants
 */
export type RadioGroupType =
  | 'default'
  | 'solid'
  | 'outline'
  | 'tinted'
  | 'soft'
  | 'neutral'
  | 'unstyled';

/**
 * RadioGroup sizes
 * | Size | Circle | Inner dot |
 * | sm   | 14px   | 6px       |
 * | md   | 18px   | 8px       |
 * | lg   | 22px   | 10px      |
 */
export type RadioGroupSize = 'sm' | 'md' | 'lg';

// ============================================================================
// RadioGroup Root
// ============================================================================

export interface RadioGroupBaseProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: RadioGroupType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: RadioGroupSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * RadioGroupBase - Group of mutually exclusive options
 * 
 * Exactly one can be selected.
 * 
 * Keyboard:
 * - Tab → moves into group (first or selected item)
 * - ↑/↓ (vertical) or ←/→ (horizontal) → cycles items, auto-selects
 * - Arrow navigation loops (end → back to start)
 * 
 * Accessibility:
 * - role="radiogroup" (via Radix)
 * - aria-orientation
 * - Items are arrow-key navigable, NOT Tab navigable (single tab stop)
 */
export const RadioGroupBase = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupBaseProps
>(({ type = 'default', size = 'md', variant, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    data-type={type}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
RadioGroupBase.displayName = 'RadioGroupBase';

// ============================================================================
// RadioGroup Item
// ============================================================================

export interface RadioGroupItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {}

/**
 * RadioGroupItemBase - Individual radio button
 * 
 * States:
 * - unselected: empty circle
 * - selected: filled circle (inner dot)
 * - hover: ring brightens
 * - focus: focus ring
 * - disabled: reduced opacity
 * 
 * Animation:
 * - Select: inner dot scales in 0→1 | --duration-fast | --ease-spring
 * - Deselect: dot scales out 1→0
 * 
 * Accessibility:
 * - role="radio"
 * - aria-checked="true|false"
 */
export const RadioGroupItemBase = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemBaseProps
>((props, ref) => <RadioGroupPrimitive.Item ref={ref} {...props} />);
RadioGroupItemBase.displayName = 'RadioGroupItemBase';

// ============================================================================
// RadioGroup Indicator
// ============================================================================

export interface RadioGroupIndicatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator> {}

/**
 * RadioGroupIndicatorBase - The inner dot when selected
 */
export const RadioGroupIndicatorBase = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Indicator>,
  RadioGroupIndicatorBaseProps
>((props, ref) => <RadioGroupPrimitive.Indicator ref={ref} {...props} />);
export const RadioGroupItem = RadioGroupItemBase;
export type RadioGroupItemProps = RadioGroupItemBaseProps;
export const RadioGroup = RadioGroupBase;
export type RadioGroupProps = RadioGroupBaseProps;

export { RadioGroupPrimitive };
