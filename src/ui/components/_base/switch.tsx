import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
/**
 * Switch sizes
 * | Size | Track W×H | Thumb  |
 * | sm   | 32×16     | 12px   |
 * | md   | 44×24     | 18px   |
 * | lg   | 56×32     | 24px   |
 */
export type SwitchSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Switch Root
// ============================================================================

export interface SwitchBaseProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /**
   * Size variant
   * @default 'md'
   */
  size?: SwitchSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * SwitchBase - Toggle switch for boolean on/off states
 * 
 * Visually distinct from Checkbox — implies immediate effect.
 * 
 * States:
 * - unchecked: thumb left, track dim
 * - checked: thumb right, track accent color
 * - hover: track brightens slightly
 * - focus: focus ring on switch track
 * - active: thumb compresses slightly (optional squeeze effect)
 * - disabled: reduced opacity
 * 
 * Animation:
 * - Thumb translate: left→right | --duration-base | --ease-spring
 * - Track bg: dim→accent | --duration-base
 * - Thumb squeeze: scale(1.1) width on active (version decides)
 * 
 * Accessibility:
 * - role="switch" (via Radix)
 * - aria-checked
 * - aria-disabled
 * - MUST have accessible label
 */
export const SwitchBase = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  SwitchBaseProps
>(({ size = 'md', variant, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
SwitchBase.displayName = 'SwitchBase';

// ============================================================================
// Switch Thumb
// ============================================================================

export interface SwitchThumbBaseProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb> {}

/**
 * SwitchThumbBase - The sliding circle inside the track
 */
export const SwitchThumbBase = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Thumb>,
  SwitchThumbBaseProps
>((props, ref) => <SwitchPrimitive.Thumb ref={ref} {...props} />);
SwitchThumbBase.displayName = 'SwitchThumbBase';

export { SwitchPrimitive };
export const SwitchPrimitives = SwitchPrimitive;
