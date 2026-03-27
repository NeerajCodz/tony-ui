import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
/**
 * Component type defines the structural visual treatment
 * All 15 types as defined in _base.md
 */
export type ButtonType =
  | 'default'   // Surface with background and border
  | 'solid'     // Fully filled with accent color
  | 'outline'   // Transparent with accent border
  | 'ghost'     // Invisible at rest, revealed on interaction
  | 'inverse'   // Flipped color relationship
  | 'contrast'  // Maximum contrast mode
  | 'soft'      // Muted accent tint (~6%)
  | 'neutral'   // Pure gray, no accent
  | 'subtle'    // Gentlest surface (~2-3%)
  | 'elevated'  // Shadow/depth instead of border
  | 'flat'      // No bg/border/shadow, full opacity text
  | 'tinted'    // Medium accent tint (~22%)
  | 'link'      // Hyperlink style, no box
  | 'disabled'  // TYPE not state - permanent inactive visual
  | 'unstyled'; // Zero visual treatment

/**
 * Component size variants
 * | Size | Height | Padding H | Font  | Icon  |
 * | xs   | 20px   | 8px       | 10px  | 12px  |
 * | sm   | 28px   | 12px      | 12px  | 14px  |
 * | md   | 36px   | 16px      | 14px  | 16px  |
 * | lg   | 44px   | 20px      | 16px  | 18px  |
 * | xl   | 52px   | 24px      | 18px  | 20px  |
 */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon';

export interface ButtonBaseProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Render as a different element using Radix Slot
   * Useful for link buttons: <Button asChild><a href="/path">Link</a></Button>
   */
  asChild?: boolean;
  
  /**
   * Visual structural type - how borders, backgrounds, text weights are applied
   * @default 'default'
   */
  visualType?: ButtonType;
  
  /**
   * HTML button type attribute
   * @default 'button'
   */
  htmlType?: 'button' | 'submit' | 'reset';
  
  /**
   * Semantic color variant (primary, destructive, success, etc.)
   * Overrides accent color tokens
   */
  variant?: string;
  
  /**
   * Size variant affecting height, padding, font size
   * @default 'md'
   */
  size?: ButtonSize;
  
  /**
   * Loading state - shows spinner, disables interaction
   * Uses aria-disabled (not disabled attr) so AT can still read it
   */
  loading?: boolean;
  
  /**
   * Full width button (width: 100%)
   */
  fullWidth?: boolean;
}

/**
 * ButtonBase - The primary interactive trigger element
 * 
 * This is the reference implementation for all type variants.
 * Version components should extend this and apply visual styles.
 * 
 * Accessibility:
 * - Native <button> element by default
 * - Uses aria-disabled for loading state (not disabled attr)
 * - Add aria-label for icon-only buttons
 * - aria-busy="true" during loading
 * 
 * Keyboard:
 * - Enter/Space → activate
 * - Default type="button" to prevent form submission
 */
export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      asChild = false,
      visualType = 'default',
      htmlType = 'button',
      variant,
      size = 'md',
      loading = false,
      fullWidth = false,
      disabled,
      children,
      'aria-disabled': ariaDisabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    
    // Compute disabled state - loading implies disabled interaction
    const isDisabled = disabled || loading;
    
    return (
      <Comp
        ref={ref}
        // Default to type="button" to prevent form submission
        type={asChild ? undefined : htmlType}
        disabled={isDisabled}
        aria-disabled={loading ? true : ariaDisabled}
        aria-busy={loading ? true : undefined}
        data-type={visualType}
        data-size={size}
        data-variant={variant}
        data-loading={loading ? '' : undefined}
        data-full-width={fullWidth ? '' : undefined}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
ButtonBase.displayName = 'ButtonBase';

export { ButtonBase as Button };

export { Slot };

// Compatibility helper expected by many version wrappers
export const buttonVariants = (_?: {
  visualType?: ButtonType;
  size?: ButtonSize;
  className?: string;
}) => '';
