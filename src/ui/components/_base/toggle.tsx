import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';

/**
 * Toggle type variants - visual treatment when pressed
 */
export type ToggleType =
  | 'default'
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'neutral'
  | 'subtle'
  | 'unstyled';

/**
 * Toggle sizes
 * | Size | Height | Icon/text |
 * | xs   | 24px   | 14px      |
 * | sm   | 28px   | 16px      |
 * | md   | 36px   | 18px      |
 * | lg   | 44px   | 20px      |
 */
export type ToggleSize = 'xs' | 'sm' | 'md' | 'lg';

// ============================================================================
// Toggle
// ============================================================================

export interface ToggleBaseProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>, 'type'> {
  /**
   * Visual structural type
   * @default 'default'
   */
  visualType?: ToggleType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: ToggleSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * ToggleBase - Two-state button (on/off)
 * 
 * Unlike Switch (setting toggle), Toggle is for contextual actions like:
 * - Bold/Italic text formatting
 * - Showing/hiding a panel
 * - Enabling a temporary mode
 * 
 * States:
 * - unpressed: subtle background
 * - pressed: accent/solid background
 * - hover: brightens
 * - focus: focus ring
 * - disabled: reduced opacity
 * 
 * Animation:
 * - Press: scale 1→0.95→1 | --duration-fast
 * - Background color transition
 * 
 * Keyboard:
 * - Enter/Space → toggle state
 * 
 * Accessibility:
 * - aria-pressed="true|false"
 */
export const ToggleBase = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleBaseProps
>(({ visualType = 'default', size = 'md', variant, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    data-type={visualType}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
ToggleBase.displayName = 'ToggleBase';
